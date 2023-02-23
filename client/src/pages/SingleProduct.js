import { useQuery } from "@apollo/client";
import ProductsContext from "../utils/productsContext";
import { useParams } from "react-router-dom";
import { QUERY_PRODUCT } from "../utils/queries";
import React, { useContext, useEffect, useState } from "react";
import Auth from "../utils/auth";

const SingleProduct = ({ setCount }) => {
  const { productList, setProductList } = useContext(ProductsContext);
  const [buttonText, setButtonText] = useState("Add to Cart");

  const { productId } = useParams();

  console.log(productList);

  const handleProductList = () => {
    setProductList([...productList, productId]);
    setButtonText("Added To Your Cart!");
    setCount(productList.length + 1);
  };

  let cartButton;

  if (Auth.loggedIn()) {
    cartButton = <button onClick={handleProductList}>{buttonText}</button>;
  } else {
    cartButton = <p>Login to Add to Cart</p>;
  }

  const { loading, data } = useQuery(QUERY_PRODUCT, {
    variables: { productId: productId },
  });

  console.log(data);

  const product = data?.product || {};

  console.log(product.image);

  const imageName = product.image;

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="sp-card">
      <header className="sp-title">
        <h2>{product.name} </h2>
      </header>
      <br></br>
      <div className="sp-container">
        <img src={`/images/${imageName}`} class="spimage" />

        <div className="sp-addprice">
          <h3>${product.price}</h3>
          {cartButton}
        </div>
      </div>
      <div className="sp-right-col">
        <p className="sp-description"> {product.description}</p>
      </div>
    </div>
  );
};

export default SingleProduct;
