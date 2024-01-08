import { useState } from "react";
import "../index.css";
import "../queries.css";
import Nav from "./Nav";
import Hero from "./Hero";
import ProudProducts from "./ProudProducts";
import Product from "./Product";
import CallToAction from "./CallToAction";
import TrendingProducts from "./TrendingProducts";
import Catagories from "./Catagories";
import Footer from "./Footer";
import ProductPage from "./ProductPage";
import Cart from "./Cart";
// import { FOCUSABLE_SELECTOR } from "@testing-library/user-event/dist/utils";

const ProudProductsList = [
  {
    title: "Old School Jacket",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsam eligendi iure quo odit, fuga itaque animi modi, neque delectus quidem vero quaerat. Totam minus et cupiditate, ex quis voluptate.",
    image: "./Proud Products/product-1.jpg",
    price: 20,
  },
  {
    title: "Trouser",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsam eligendi iure quo odit, fuga itaque animi modi, neque delectus quidem vero quaerat. Totam minus et cupiditate, ex quis voluptate.",
    image: "./Proud Products/product-2.jpg",
    price: 23,
  },
  {
    title: "Skin Care Product",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsam eligendi iure quo odit, fuga itaque animi modi, neque delectus quidem vero quaerat. Totam minus et cupiditate, ex quis voluptate.",
    image: "./Proud Products/product-3.jpg",
    price: 10,
  },
  {
    title: "Mac-Book",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsam eligendi iure quo odit, fuga itaque animi modi, neque delectus quidem vero quaerat. Totam minus et cupiditate, ex quis voluptate.",
    image: "./Proud Products/product-4.jpg",
    price: 1230,
  },
  {
    title: "Earbud",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsam eligendi iure quo odit, fuga itaque animi modi, neque delectus quidem vero quaerat. Totam minus et cupiditate, ex quis voluptate.",
    image: "./Proud Products/product-5.jpg",
    price: 20,
  },
  {
    title: "Lexury Chair",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsam eligendi iure quo odit, fuga itaque animi modi, neque delectus quidem vero quaerat. Totam minus et cupiditate, ex quis voluptate.",
    image: "./Proud Products/product-6.jpg",
    price: 70,
  },
  {
    title: "Table",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsam eligendi iure quo odit, fuga itaque animi modi, neque delectus quidem vero quaerat. Totam minus et cupiditate, ex quis voluptate.",
    image: "./Proud Products/product-7.jpg",
    price: 100,
  },
  {
    title: "Lamp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsam eligendi iure quo odit, fuga itaque animi modi, neque delectus quidem vero quaerat. Totam minus et cupiditate, ex quis voluptate.",
    image: "./Proud Products/product-8.jpg",
    price: 15,
  },
  {
    title: "Shelf",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsam eligendi iure quo odit, fuga itaque animi modi, neque delectus quidem vero quaerat. Totam minus et cupiditate, ex quis voluptate.",
    image: "./Proud Products/product-9.jpg",
    price: 200,
  },
];

const TrendingProductsList = [
  {
    title: "Earbud",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsam eligendi iure quo odit, fuga itaque animi modi, neque delectus quidem vero quaerat. Totam minus et cupiditate, ex quis voluptate.",
    image: "./img/Trending Products/product-1.jpg",
    price: 20,
  },
  {
    title: "Chair",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsam eligendi iure quo odit, fuga itaque animi modi, neque delectus quidem vero quaerat. Totam minus et cupiditate, ex quis voluptate.",
    image: "./img/Trending Products/product-2.jpg",
    price: 23,
  },
  {
    title: "Mashroom Lamp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsam eligendi iure quo odit, fuga itaque animi modi, neque delectus quidem vero quaerat. Totam minus et cupiditate, ex quis voluptate.",
    image: "./img/Trending Products/product-3.jpg",
    price: 10,
  },
  {
    title: "Chair",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsam eligendi iure quo odit, fuga itaque animi modi, neque delectus quidem vero quaerat. Totam minus et cupiditate, ex quis voluptate.",
    image: "./img/Trending Products/product-4.jpg",
    price: 1230,
  },
  {
    title: "Shoes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsam eligendi iure quo odit, fuga itaque animi modi, neque delectus quidem vero quaerat. Totam minus et cupiditate, ex quis voluptate.",
    image: "./img/Trending Products/product-5.jpg",
    price: 20,
  },
  {
    title: "T-shirt",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsam eligendi iure quo odit, fuga itaque animi modi, neque delectus quidem vero quaerat. Totam minus et cupiditate, ex quis voluptate.",
    image: "./img/Trending Products/product-6.jpg",
    price: 70,
  },
  {
    title: "Jacket",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsam eligendi iure quo odit, fuga itaque animi modi, neque delectus quidem vero quaerat. Totam minus et cupiditate, ex quis voluptate.",
    image: "./img/Trending Products/product-7.jpg",
    price: 100,
  },
  {
    title: "Trouser",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsam eligendi iure quo odit, fuga itaque animi modi, neque delectus quidem vero quaerat. Totam minus et cupiditate, ex quis voluptate.",
    image: "./img/Trending Products/product-8.jpg",
    price: 15,
  },
  {
    title: "Smart Watch",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsam eligendi iure quo odit, fuga itaque animi modi, neque delectus quidem vero quaerat. Totam minus et cupiditate, ex quis voluptate.",
    image: "./img/Trending Products/product-9.jpg",
    price: 200,
  },
];

export const AllProductList = [
  {
    title: "Chair",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsam eligendi iure quo odit, fuga itaque animi modi, neque delectus quidem vero quaerat. Totam minus et cupiditate, ex quis voluptate.",
    image: "./img/All//product (18).jpg",
    price: 100,
  },
  {
    title: "Shelf",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsam eligendi iure quo odit, fuga itaque animi modi, neque delectus quidem vero quaerat. Totam minus et cupiditate, ex quis voluptate.",
    image: "./img/All//product (19).jpg",
    price: 155,
  },
  {
    title: "Jacket",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsam eligendi iure quo odit, fuga itaque animi modi, neque delectus quidem vero quaerat. Totam minus et cupiditate, ex quis voluptate.",
    image: "./img/All//product (20).jpg",
    price: 122,
  },

  {
    title: "Double Chair",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsam eligendi iure quo odit, fuga itaque animi modi, neque delectus quidem vero quaerat. Totam minus et cupiditate, ex quis voluptate.",
    image: "./img/All//product (2).jpg",
    price: 90,
  },

  {
    title: "Hanging Lamp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsam eligendi iure quo odit, fuga itaque animi modi, neque delectus quidem vero quaerat. Totam minus et cupiditate, ex quis voluptate.",
    image: "./img/All//product (4).jpg",
    price: 20,
  },
  {
    title: "Nike Air",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsam eligendi iure quo odit, fuga itaque animi modi, neque delectus quidem vero quaerat. Totam minus et cupiditate, ex quis voluptate.",
    image: "./img/All//product (5).jpg",
    price: 55,
  },
  {
    title: "Adidas Shoe",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsam eligendi iure quo odit, fuga itaque animi modi, neque delectus quidem vero quaerat. Totam minus et cupiditate, ex quis voluptate.",
    image: "./img/All//product (6).jpg",
    price: 50,
  },
  {
    title: "Watch",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsam eligendi iure quo odit, fuga itaque animi modi, neque delectus quidem vero quaerat. Totam minus et cupiditate, ex quis voluptate.",
    image: "./img/All//product (13).jpg",
    price: 70,
  },

  {
    title: "T-shirt",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsam eligendi iure quo odit, fuga itaque animi modi, neque delectus quidem vero quaerat. Totam minus et cupiditate, ex quis voluptate.",
    image: "./img/All//product (9).jpg",
    price: 20,
  },
  {
    title: "Jordan T-shirt",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsam eligendi iure quo odit, fuga itaque animi modi, neque delectus quidem vero quaerat. Totam minus et cupiditate, ex quis voluptate.",
    image: "./img/All//product (10).jpg",
    price: 26,
  },
  {
    title: "Smart Watch",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsam eligendi iure quo odit, fuga itaque animi modi, neque delectus quidem vero quaerat. Totam minus et cupiditate, ex quis voluptate.",
    image: "./img/All//product (11).jpg",
    price: 90,
  },
  {
    title: "Watch",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsam eligendi iure quo odit, fuga itaque animi modi, neque delectus quidem vero quaerat. Totam minus et cupiditate, ex quis voluptate.",
    image: "./img/All//product (15).jpg",
    price: 70,
  },

  {
    title: "Nike Shoe",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsam eligendi iure quo odit, fuga itaque animi modi, neque delectus quidem vero quaerat. Totam minus et cupiditate, ex quis voluptate.",
    image: "./img/All//product (7).jpg",
    price: 80,
  },
  {
    title: "Smart Watch",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsam eligendi iure quo odit, fuga itaque animi modi, neque delectus quidem vero quaerat. Totam minus et cupiditate, ex quis voluptate.",
    image: "./img/All//product (14).jpg",
    price: 80,
  },
  {
    title: "Samsung A51",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsam eligendi iure quo odit, fuga itaque animi modi, neque delectus quidem vero quaerat. Totam minus et cupiditate, ex quis voluptate.",
    image: "./img/All//product (16).jpg",
    price: 200,
  },
  {
    title: "Earpad",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsam eligendi iure quo odit, fuga itaque animi modi, neque delectus quidem vero quaerat. Totam minus et cupiditate, ex quis voluptate.",
    image: "./img/All//product (17).jpg",
    price: 80,
  },
  {
    title: "Boots",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsam eligendi iure quo odit, fuga itaque animi modi, neque delectus quidem vero quaerat. Totam minus et cupiditate, ex quis voluptate.",
    image: "./img/All//product (8).jpg",
    price: 40,
  },

  {
    title: "Skin Care",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsam eligendi iure quo odit, fuga itaque animi modi, neque delectus quidem vero quaerat. Totam minus et cupiditate, ex quis voluptate.",
    image: "./img/All//product (22).jpg",
    price: 18,
  },
  {
    title: "Women Trouser",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsam eligendi iure quo odit, fuga itaque animi modi, neque delectus quidem vero quaerat. Totam minus et cupiditate, ex quis voluptate.",
    image: "./img/All//product (23).jpg",
    price: 30,
  },
  {
    title: "Trouser",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsam eligendi iure quo odit, fuga itaque animi modi, neque delectus quidem vero quaerat. Totam minus et cupiditate, ex quis voluptate.",
    image: "./img/All//product (24).jpg",
    price: 18,
  },
  {
    title: "Old School Jacket",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsam eligendi iure quo odit, fuga itaque animi modi, neque delectus quidem vero quaerat. Totam minus et cupiditate, ex quis voluptate.",
    image: "./img/All//product (25).jpg",
    price: 70,
  },
  {
    title: "Lamp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsam eligendi iure quo odit, fuga itaque animi modi, neque delectus quidem vero quaerat. Totam minus et cupiditate, ex quis voluptate.",
    image: "./img/All//product (26).jpg",
    price: 28,
  },
  {
    title: "Shelf",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsam eligendi iure quo odit, fuga itaque animi modi, neque delectus quidem vero quaerat. Totam minus et cupiditate, ex quis voluptate.",
    image: "./img/All//product (27).jpg",
    price: 120,
  },
  {
    title: "Earbud",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsam eligendi iure quo odit, fuga itaque animi modi, neque delectus quidem vero quaerat. Totam minus et cupiditate, ex quis voluptate.",
    image: "./img/All//product (28).jpg",
    price: 45,
  },
  {
    title: "Chair",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsam eligendi iure quo odit, fuga itaque animi modi, neque delectus quidem vero quaerat. Totam minus et cupiditate, ex quis voluptate.",
    image: "./img/All//product (29).jpg",
    price: 180,
  },
  {
    title: "Shelf",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsam eligendi iure quo odit, fuga itaque animi modi, neque delectus quidem vero quaerat. Totam minus et cupiditate, ex quis voluptate.",
    image: "./img/All//product (21).jpg",
    price: 180,
  },

  {
    title: "Smart Tv",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsam eligendi iure quo odit, fuga itaque animi modi, neque delectus quidem vero quaerat. Totam minus et cupiditate, ex quis voluptate.",
    image: "./img/All//product (30).jpg",
    price: 380,
  },
  {
    title: "Hexagon Shelf",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsam eligendi iure quo odit, fuga itaque animi modi, neque delectus quidem vero quaerat. Totam minus et cupiditate, ex quis voluptate.",
    image: "./img/All//product (31).jpg",
    price: 180,
  },
  {
    title: "Mashroom Lamp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsam eligendi iure quo odit, fuga itaque animi modi, neque delectus quidem vero quaerat. Totam minus et cupiditate, ex quis voluptate.",
    image: "./img/All//product (32).jpg",
    price: 23,
  },
  {
    title: "hp Laptop",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsam eligendi iure quo odit, fuga itaque animi modi, neque delectus quidem vero quaerat. Totam minus et cupiditate, ex quis voluptate.",
    image: "./img/All//product (33).jpg",
    price: 1800,
  },
  {
    title: "Earpad",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsam eligendi iure quo odit, fuga itaque animi modi, neque delectus quidem vero quaerat. Totam minus et cupiditate, ex quis voluptate.",
    image: "./img/All//product (34).jpg",
    price: 44,
  },
  {
    title: "Iphone 14-pro",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsam eligendi iure quo odit, fuga itaque animi modi, neque delectus quidem vero quaerat. Totam minus et cupiditate, ex quis voluptate.",
    image: "./img/All//product (1).jpg",
    price: 200,
  },

  {
    title: "Fast Charger",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsam eligendi iure quo odit, fuga itaque animi modi, neque delectus quidem vero quaerat. Totam minus et cupiditate, ex quis voluptate.",
    image: "./img/All//product (35).jpg",
    price: 18,
  },
  {
    title: "Jacket",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsam eligendi iure quo odit, fuga itaque animi modi, neque delectus quidem vero quaerat. Totam minus et cupiditate, ex quis voluptate.",
    image: "./img/All//product (36).jpg",
    price: 180,
  },
];

export const furniture = [
  AllProductList[0],
  AllProductList[3],
  AllProductList[24],
];
export const electronics = [
  AllProductList[14],
  AllProductList[15],
  AllProductList[26],
  AllProductList[29],
  AllProductList[30],
  AllProductList[31],
  AllProductList[32],
];
export const clothes = [
  AllProductList[2],
  AllProductList[5],
  AllProductList[6],
  AllProductList[8],
  AllProductList[9],
  AllProductList[12],
  AllProductList[16],
  AllProductList[18],
  AllProductList[19],
  AllProductList[33],
];
export const skin = [AllProductList[17], ProudProductsList[2]];
export const shelve = [
  AllProductList[1],
  AllProductList[22],
  AllProductList[25],
  AllProductList[27],
];
export const lamps = [
  AllProductList[4],
  AllProductList[21],
  AllProductList[28],
];

export const watches = [
  AllProductList[7],
  AllProductList[10],
  AllProductList[13],
];
export const kitchen = [AllProductList[27]];
export default function App() {
  const [display, setDisplay] = useState("default");
  const [product, setProduct] = useState(ProudProductsList.at(0));
  const [catagory, setCatagory] = useState(AllProductList.slice());
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  console.log(totalPrice);
  // let tp = cartItems.reduce((acc, i) => acc + i.price, 0);
  function handleCartItems(product) {
    let isAlreadyElement = false;
    cartItems.forEach((item) => {
      if (item.image === product.image) isAlreadyElement = true;
    });
    if (!isAlreadyElement) {
      setCartItems((items) => [...items, product]);
      setTotalPrice(
        (p) => cartItems.reduce((acc, i) => acc + i.price, 0) + product.price
      );
    }
  }

  function handleCatagory(catag) {
    setCatagory((c) => catag);
  }

  function handleDisplay(display) {
    setDisplay((disp) => display);
    scrollToTop();
  }

  function scrollToTop() {
    document.documentElement.classList.add("scroll-to-top");
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      document.documentElement.classList.remove("scroll-to-top");
    }, 1000);
  }
  return (
    <div className="app">
      {showCart && (
        <div className="overlay" onClick={() => setShowCart(false)}></div>
      )}
      <Nav
        cartItems={cartItems}
        onDisplay={handleDisplay}
        setShowCart={setShowCart}
        classF={showCart && "filter"}
      />

      <Cart
        totalPrice={totalPrice}
        setTotalPrice={setTotalPrice}
        showCart={showCart}
        setShowCart={setShowCart}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
      <div className={`container ${showCart && "filter"} `}>
        {display === "default" && (
          <>
            <Hero
              handleCatagory={handleCatagory}
              handleDisplay={handleDisplay}
            />
            <ProudProducts>
              {ProudProductsList.map((prod) => (
                <Product
                  product={prod}
                  key={prod.image}
                  onDisplay={handleDisplay}
                  onSetProduct={setProduct}
                  classPassed="product-for-proud"
                />
              ))}
            </ProudProducts>
            <CallToAction />
          </>
        )}
        {display === "product-page" && (
          <ProductPage product={product} handleCartItems={handleCartItems} />
        )}
        {display === "catagories" && (
          <Catagories
            catagory={catagory}
            handleCatagory={handleCatagory}
            onDisplay={handleDisplay}
            onSetProduct={setProduct}
          ></Catagories>
        )}
        <TrendingProducts>
          {TrendingProductsList.map((prod) => (
            <Product
              product={prod}
              key={prod.image}
              onDisplay={handleDisplay}
              onSetProduct={setProduct}
            />
          ))}
        </TrendingProducts>
      </div>
      <Footer />
    </div>
  );
}
