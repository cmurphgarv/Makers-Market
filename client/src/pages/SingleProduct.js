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
    <div className="outer-container">
      <header className="title-container">
        <h1>{product.name}</h1>
      </header>
      <div className="sp-left-col">
        <img src={`/images/${imageName}`} />

        <div className="sp-add/price">
          <button>Add to Cart</button>
          <h3>{product.price}</h3>
        </div>
      </div>
      <div className="sp-right-col">
        <p className="sp-description">
          Duis ex tempor aliqua est. Excepteur elit dolor velit cillum eiusmod
          excepteur voluptate velit. Cillum amet amet eiusmod aliqua veniam.
          Sint ipsum aliqua consequat nostrud Lorem amet veniam quis Lorem
          consequat duis labore. Pariatur consequat proident id elit
          exercitation sint culpa elit. Et ullamco culpa Lorem aliquip. Ea magna
          dolore proident irure incididunt irure dolor ut aliquip eu nostrud
          quis ipsum officia.
        </p>
      </div>
    </div>
  );
};

export default SingleProduct;
