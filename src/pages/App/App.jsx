import { useEffect, useState } from "react";
import ProductsSelect from "../../component/ProductsSelect/ProductsSelect";
import ProductsShow from "../../component/ProductsShow/ProductsShow";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  //Data get from local storage
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  return (
    <main>
      <ProductsSelect products={products} setProducts={setProducts} />
      <ProductsShow products={products} setProducts={setProducts} />
    </main>
  );
}
export default App;
