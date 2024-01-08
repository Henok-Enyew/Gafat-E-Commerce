import { furniture, clothes, electronics, kitchen, lamps, skin } from "./App";

export default function Hero({ handleCatagory, handleDisplay }) {
  function handleClick(catag) {
    handleCatagory(catag);
    handleDisplay("catagories");
  }
  return (
    <div className="hero">
      <div className="hero-grid">
        <Image
          onClick={() => handleClick(furniture)}
          className=" img-furniture"
          src="./img/Hero/Hero-Furniture.jpg"
        >
          Live Comfortably
        </Image>

        <Image
          onClick={() => handleClick(clothes)}
          className=" img-clothing "
          src="./img/Hero/Hero-Clothing.jpg"
        >
          Clothes
        </Image>
        <Image
          onClick={() => handleClick(electronics)}
          className=" img-electronics"
          src="./img/Hero/Hero-Electronics.jpg"
        >
          Electronics
        </Image>

        <Image
          onClick={() => handleClick(kitchen)}
          className=" img-kitchen"
          src="./img/Hero/Hero-Kitchen.jpg"
        >
          Modern Kitchen
        </Image>
        <Image
          onClick={() => handleClick(lamps)}
          className=" img-lamps"
          src="./img/Hero/Hero-Lamps.jpg"
        >
          Lamps{" "}
        </Image>
        <Image
          onClick={() => handleClick(skin)}
          className="img-skin-care"
          src="./img/Hero/Hero-Skin-Care.jpg"
        >
          Skin Care
        </Image>
      </div>
    </div>
  );
}

function Image({ className, src, children, onClick }) {
  // const [showText, setShowText] = useState(false);
  return (
    <div
      onClick={onClick}
      className={`hero-img-cont ${className}`}
      // onMouseEnter={() => setShowText(true)}
      // onMouseLeave={() => setShowText(false)}
    >
      <img className={`hero-img `} src={src} alt={className} />
      <p>{children}</p>
    </div>
  );
}
