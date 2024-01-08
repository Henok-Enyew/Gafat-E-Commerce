import Product from "./Product";
import {
  AllProductList,
  furniture,
  clothes,
  kitchen,
  electronics,
  skin,
  shelve,
  lamps,
  watches,
} from "./App";

export default function Catagories({
  onDisplay,
  onSetProduct,
  handleCatagory,
  catagory,
}) {
  return (
    <div className="catagories">
      <div className="tabs">
        <button
          onClick={() => handleCatagory(AllProductList)}
          className={`tab ${catagory === AllProductList ? "active-tab" : ""}`}
        >
          All
        </button>
        <button
          onClick={() => handleCatagory(furniture)}
          className={`tab ${catagory === furniture ? "active-tab" : ""}`}
        >
          Furniture
        </button>
        <button
          onClick={() => handleCatagory(clothes)}
          className={`tab ${catagory === clothes ? "active-tab" : ""}`}
        >
          Clothes
        </button>
        <button
          onClick={() => handleCatagory(kitchen)}
          className={`tab ${catagory === kitchen ? "active-tab" : ""}`}
        >
          Kitchen
        </button>
        <button
          onClick={() => handleCatagory(electronics)}
          className={`tab ${catagory === electronics ? "active-tab" : ""}`}
        >
          Electronics
        </button>
        <button
          onClick={() => handleCatagory(skin)}
          className={`tab ${catagory === skin ? "active-tab" : ""}`}
        >
          Skincare
        </button>
        <button
          onClick={() => handleCatagory(shelve)}
          className={`tab ${catagory === shelve ? "active-tab" : ""}`}
        >
          Shelve
        </button>
        <button
          onClick={() => handleCatagory(lamps)}
          className={`tab ${catagory === lamps ? "active-tab" : ""}`}
        >
          Lamps
        </button>
        <button
          onClick={() => handleCatagory(watches)}
          className={`tab ${catagory === watches ? "active-tab" : ""}`}
        >
          Watches
        </button>
      </div>
      <div className="catagories-grid">
        {catagory.map((prod) => (
          <Product
            product={prod}
            key={crypto.randomUUID()}
            classPassed="product-for-catagory"
            onDisplay={onDisplay}
            onSetProduct={onSetProduct}
          />
        ))}
      </div>
    </div>
  );
}
