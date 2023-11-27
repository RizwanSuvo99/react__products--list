/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./ProductsSelect.css";
export default function ProductsSelect({ products, setProducts }) {
  const [inputId, setInputId] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [inputQuantity, setInputQuantity] = useState("");
  const [inputDesc, setInputDesc] = useState("");
  const [colorSelect, setColorSelect] = useState("");

  const product__details = {
    inputId,
    inputName,
    inputPrice,
    inputQuantity,
    inputDesc,
    colorSelect,
  };

  const clearInput = () => {
    setInputId("");
    setInputName("");
    setInputPrice("");
    setInputQuantity("");
    setInputDesc("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProducts([...products, product__details]);
    clearInput();
  };

  return (
    <div className="product">
      <form action="" className="product__form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="product__id">Product Id:</label>
          <input
            required
            type="text"
            id="product__id"
            value={inputId}
            onChange={(e) => setInputId(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="product__name">Product Name:</label>
          <input
            required
            type="text"
            id="product__name"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="product__price">Product Price:</label>
          <input
            required
            type="text"
            id="product__price"
            value={inputPrice}
            onChange={(e) => setInputPrice(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="product__quantity">Quantity:</label>
          <input
            required
            type="number"
            id="product__quantity"
            value={inputQuantity}
            onChange={(e) => setInputQuantity(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="product__desc">Description:</label>
          <input
            required
            type="text"
            id="product__desc"
            value={inputDesc}
            onChange={(e) => setInputDesc(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="product__color">Product Color:</label>
          <select
            required
            name=""
            id="product__color"
            onChange={(e) => setColorSelect(e.target.value)}
          >
            <option value="">Select a Color</option>
            <option value={"Dark Blue"}>Dark Blue</option>
            <option value={"Teal"}>Teal</option>
            <option value={"Green"}>Green</option>
            <option value={"Yellow"}>Yellow</option>
          </select>
        </div>
        <div>
          <input type="submit" value={"Add Product"} className="btn" />
        </div>
      </form>
    </div>
  );
}
