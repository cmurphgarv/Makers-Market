import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_PRODUCTS } from "../utils/queries";
import ProductItem from "../components/ProductItem";

const Homepage = ({ count, setCount }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const { loading, error, data } = useQuery(QUERY_ALL_PRODUCTS);
  console.log(data);
  let products = data?.products || [];

  const onCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const getFilteredProducts = () => {
    return products.filter((product) => {
      if (selectedCategory === "") {
        return true;
      }
      return product.category.name === selectedCategory;
    });
  };

  if (loading) return "Loading...";
  if (error) return `ERORR! ${error.message}`;

  console.log(selectedCategory);

  return (
    <div>
      <div class="categorydiv">
        {" "}
        <h6>Products by Type:</h6>
        <select
          name="categorylist"
          id="categorylist"
          onChange={onCategoryChange}
        >
          <option value="">All</option>
          <option value="2D">2D</option>
          <option value="3D">3D</option>
          <option value="Jewelry">Jewelry</option>
          <option value="Misc">Misc</option>
        </select>
      </div>
      <h3>Products</h3>
      <div class="card">
        <br></br>
        {getFilteredProducts().map((product) => (
          <div class="container" key={product}>
            <ProductItem
              name={product.name}
              image={product.image}
              price={product.price}
              _id={product._id}
              count={count}
              setCount={setCount}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
