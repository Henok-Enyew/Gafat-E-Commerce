export default function TrendingProducts({ children }) {
  return (
    <>
      <h3 className="trending-products-header">Trending Products</h3>
      <div className="trending-products">
        <div className="trending-products-container">
          {children}
          {/* {TrendingProductsList.map((prod) => (
            <Product product={prod} key={prod.image} />
          ))} */}
        </div>
      </div>
    </>
  );
}
