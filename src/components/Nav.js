import { useState } from "react";

export default function Nav({ onDisplay, setShowCart, classF, cartItems }) {
  const [showBtns, setShowBtns] = useState(false);
  return (
    <div className={`nav ${classF}`}>
      <img
        onClick={() => onDisplay("default")}
        className="logo"
        src="./logo.jpg"
        alt="logo"
      />

      <div className="nav-btns">
        <div className={`${!showBtns ? "mobile-nav-btns" : "unhidden-btn"} `}>
          {" "}
          <Button
            onClick={() => {
              onDisplay("catagories");
              setTimeout(() => setShowBtns(false), 1000);
            }}
          >
            Catagories
          </Button>
          <Button
            onClick={() => {
              onDisplay("product-page");
              setTimeout(() => setShowBtns(false), 1000);
            }}
          >
            Product Page
          </Button>
        </div>
        <button className="icon-nav " onClick={() => setShowCart(true)}>
          <svg
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
          </svg>
          {cartItems.length ? <p>{cartItems.length}</p> : null}
        </button>
        <button
          className="mobile-nav-btn"
          onClick={() => setShowBtns((s) => !s)}
        >
          {showBtns ? (
            <p>&times;</p>
          ) : (
            <svg
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6H20M4 12H20M4 18H20"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}

function Button({ onClick, children, className }) {
  return (
    <button className={`btn ${className ? className : ""}`} onClick={onClick}>
      <p style={{ zIndex: 10 }}>{children}</p>
    </button>
  );
}
