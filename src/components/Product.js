export default function Product({
  product,
  onDisplay,
  onSetProduct,
  classPassed,
}) {
  function handleClick() {
    onDisplay("product-page");
    onSetProduct(product);
  }

  return (
    <div className={`product ${classPassed}`} onClick={handleClick}>
      <img className="product-img" src={product.image} alt={product.title} />
      <div className="product-text">
        <p className="product-title">{product.title}</p>
        <p className="product-price">{product.price}$ </p>
      </div>
    </div>
  );
}
