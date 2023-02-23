import { useContext, useEffect, useState } from "react";
import ProductsContext from "../../utils/productsContext";
import { getSavedProductList } from "../../utils/localStorage";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

const ProductItem = ({ name, image, price, _id, count, setCount }) => {
  const { productList, setProductList } = useContext(ProductsContext);
  const [buttonText, setButtonText] = useState("Add to Cart");

  console.log(productList);

  const handleProductList = () => {
    setProductList([...productList, _id]);
    setButtonText("Added To Your Cart!");
    setCount(productList.length + 1);
  };

  let cartButton;

  if (Auth.loggedIn()) {
    cartButton = <button onClick={handleProductList}>{buttonText}</button>;
  } else {
    cartButton = <p>Login to Add to Cart</p>;
  }

  return (
    <div className="">
      <div className="productItem">
        <Link to={`/products/${_id}`}>
          <img src={`/images/${image}`} alt={name} />
          <h5>{name}</h5>
          <p>${price}</p>
        </Link>
        {cartButton}
      </div>
    </div>
  );
};
export default ProductItem;
