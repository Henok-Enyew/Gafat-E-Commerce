import { useState } from "react";

export default function ProductPage({ product, handleCartItems }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="product-page">
      <h2 className="product-page-header">{product.title}</h2>
      <div className="product-page-content">
        <img
          className="product-page-img"
          src={product.image}
          alt={product.title}
        />
        <div className="product-page-details">
          <p>{product.description} </p>
          <div className="product-page-quantity">
            <p>Quantity</p>
            <div className="product-page-quantity-btns">
              <button
                onClick={() => setQuantity((q) => (q === 1 ? 1 : q - 1))}
                className="product-page-quantity-btn"
              >
                -
              </button>
              <input
                type="number"
                min={0}
                value={quantity}
                onChange={(e) => setQuantity((q) => Number(e.target.value))}
              />
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="product-page-quantity-btn"
              >
                +
              </button>
            </div>
            <p className="product-page-price">{quantity * product.price}$</p>
          </div>
          <div className="product-page-btns">
            <button
              onClick={() => handleCartItems(product)}
              className="product-page-btn-add"
            >
              Add to Cart
            </button>
            <button className="product-page-btn-buy">Buy now</button>
          </div>
        </div>
      </div>
      <div className="product-page-property">
        <div>
          <h4>Texture:</h4>
          <p>Plastic</p>
        </div>
        <div>
          <h4>Weight:</h4>
          <p>0.3kg</p>
        </div>
        <div>
          <h4>Size:</h4>
          <p>210cm &times; 10cm</p>
        </div>
      </div>
    </div>
  );
}
