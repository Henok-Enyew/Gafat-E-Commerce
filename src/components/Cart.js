// import { CartItem } from "./App";
import { useState } from "react";
export default function Cart({
  cartItems,
  setCartItems,
  showCart,
  setShowCart,
  totalPrice,
  setTotalPrice,
}) {
  // let tp = 0;
  // cartItems.forEach((it) => {
  //   tp += it.price;
  // });
  // setTotalPrice(tp);
  function handleDeleteItems(item) {
    setCartItems((items) => items.filter((i) => i.image !== item.image));
    setTotalPrice(
      (p) => cartItems.reduce((acc, i) => acc + i.price, 0) - item.price
    );
  }
  return (
    <div className={`cart ${showCart && "show-cart"}`}>
      <div className="cart-header">
        <h3>Your Shopping Cart ({cartItems.length})</h3>
        <button onClick={() => setShowCart(false)} className="cart-btn-close">
          &times;
        </button>
      </div>
      <div className="cart-item-container">
        {cartItems.length === 0 ? (
          <div className="cart-item-empty">
            <p>
              There is no item in your shopping cart yet... keep browsing 😅 👇
            </p>
            <button onClick={() => setShowCart(false)}>Keep Browsing</button>
          </div>
        ) : (
          cartItems.map((item) => (
            <CartItem
              cartItems={cartItems}
              handleDeleteItems={handleDeleteItems}
              setTotalPrice={setTotalPrice}
              item={item}
              key={item.image}
            />
          ))
        )}
      </div>
      <div className="cart-summary">
        <div>
          <p>Total</p>
          {/* <p>{cartItems.length === 1 ? cartItems[0].price : totalPrice}$</p> */}
          <p>{totalPrice}$</p>
        </div>
        <button>Go to Checkout</button>
      </div>
    </div>
  );
}

function CartItem({ item, setTotalPrice, handleDeleteItems, cartItems }) {
  const [quantity, setQuantity] = useState(1);
  let price = item.price * quantity;
  function handleQuantity(quant) {
    setQuantity((q) => quant);
    setTotalPrice((pr) => {
      if (cartItems.length === 1) return quant * item.price;
      else return pr + quant * item.price - price;
    });
  }
  return (
    <div className="cart-item" key={item.image}>
      <img src={item.image} alt={item.title} />
      <div>
        <p>{item.title}</p>
        <div className="cart-item-quantity-btns">
          <button
            onClick={() => handleQuantity(quantity === 1 ? 1 : quantity - 1)}
            className=""
          >
            -
          </button>
          <input
            type="number"
            min={0}
            value={quantity}
            onChange={(e) => handleQuantity(Number(e.target.value))}
          />

          <button onClick={() => handleQuantity(quantity + 1)} className="">
            +
          </button>
        </div>
      </div>
      <div>
        <button
          onClick={() => handleDeleteItems(item)}
          className="cart-item-btn-close"
        >
          &times;
        </button>
        <p>{quantity * item.price}$</p>
      </div>
    </div>
  );
}
