export default function ProudProducts({ onDisplay, children }) {
  return (
    <div className="proud-products">
      <h3 className="proud-products-header">Proudcts we are proud of</h3>
      <div className="proud-products-grid">{children}</div>
    </div>
  );
}
