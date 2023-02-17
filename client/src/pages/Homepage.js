import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_PRODUCTS } from "../utils/queries";
import ProductItem from "../components/ProductItem";
import SingleProduct from "./SingleProduct";
import { Link } from "react-router-dom";
import { useCartContext } from "../utils/CartContext";

const homePageStyle = {
  background: "",
};

const Homepage = () => {

  const addToCart = (product) => {
    const [ cart, setCart ] = useCartContext();
    setCart(cart.push(product));
  
  };
  const { loading, error, data } = useQuery(QUERY_ALL_PRODUCTS);
  console.log(data);
  const products = data?.products || [];
  if (loading) return "Loading...";
  if (error) return `ERROR! ${error.message}`;

  return (
    <div class="" style={homePageStyle}>
      <h3>Products</h3>
      <div class="card">
        <br></br>
        {products.map((product) => (
          <div class="container" key={product}>
            <ProductItem
              name={product.name}
              image={product.image}
              price={product.price}
              _id={product._id}
            />
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
