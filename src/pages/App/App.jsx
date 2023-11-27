import { useState } from "react";
import ProductsSelect from "../../component/ProductsSelect/ProductsSelect";
import ProductsShow from "../../component/ProductsShow/ProductsShow";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  return (
    <main>
      <ProductsSelect products={products} setProducts={setProducts} />
      <ProductsShow products={products} setProducts={setProducts} />
    </main>
  );
}
export default App;
