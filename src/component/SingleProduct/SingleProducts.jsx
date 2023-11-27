/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { MdDelete } from "react-icons/md";
export default function SingleProducts({
  product: {
    inputId,
    inputName,
    inputPrice,
    inputQuantity,
    inputDesc,
    colorSelect,
  },
  products,
  setProducts,
  index,
}) {
  const handleDelete = ()=>{
    const filteredProducts = products.filter((product,id) => id !== index);
    setProducts(filteredProducts);
  }
  return (
    <tr>
      <td>{inputId}</td>
      <td>{inputName}</td>
      <td>{inputPrice}</td>
      <td>{inputQuantity}</td>
      <td>{inputDesc}</td>
      <td>{colorSelect}</td>
      <td className="delete__btn" onClick={()=>handleDelete(index)}>
        <MdDelete />
      </td>
    </tr>
  );
}
