/* eslint-disable react/prop-types */
import SingleProducts from "../SingleProduct/SingleProducts";
import "./ProductsShow.css";
export default function ProductsShow({ products, setProducts }) {
  const handleAllDelete = () => {
    setProducts([]);
  };
  return (
    <div className="products__show">
      {products.length > 0 ? (
        <div>
          <table className="products__table">
            <thead>
              <tr>
                <th>Product ID</th>
                <th>Product Name</th>
                <th>Product Price</th>
                <th>Product Quantity</th>
                <th>Product Description</th>
                <th>Product Color</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <SingleProducts key={index} product={product} products={products} setProducts={setProducts} index={index}/>
              ))}
            </tbody>
          </table>
          <div className="remove__all" onClick={handleAllDelete}>
            <button>Remove All</button>
          </div>
        </div>
      ) : (
        <h1 className="heading__none">No product added yet.</h1>
      )}
    </div>
  );
}
