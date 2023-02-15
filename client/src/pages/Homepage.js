import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_PRODUCTS } from "../utils/queries";

const homePageStyle = {
  width: "100%",
  height: "100vh",
  background: "#14080E",
  overflowY: "scroll",
};

const Homepage = () => {
  const { data } = useQuery(QUERY_ALL_PRODUCTS);
  console.log(data);
  const products = data?.products || [];

  return (
    <div style={homePageStyle}>
      <h1>Homepage Component</h1>
      {products.map((product) => (
        <div>
          <img src={`/images/${product.image}`} />
          <li key={product._id}>{product.name}</li>
          <li key={product.name}>{product.description}</li>
        </div>
      ))}
    </div>
  );
};

export default Homepage;
