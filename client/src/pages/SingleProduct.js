import { useQuery } from "@apollo/client";
import React from "react";

import { useParams } from "react-router-dom";
import { QUERY_PRODUCT } from "../utils/queries";

const SingleProduct = () => {
  const { productId } = useParams();

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
          <button>Add to Cart</button>
        </div>
      </div>
      <div className="sp-right-col">
        <p className="sp-description">{product.description}</p>
      </div>
    </div>
  );
};

export default SingleProduct;
