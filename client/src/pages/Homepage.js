import React from "react";
import { useQuery } from "@apollo/client";
import { ProductsProvider } from "../utils/productsContext";
import { useContext } from "react";
import ProductsContext from "../utils/productsContext";
import { QUERY_ALL_PRODUCTS } from "../utils/queries";
import ProductItem from "../components/ProductItem";
import SingleProduct from "./SingleProduct";
import { Link } from "react-router-dom";

const homePageStyle = {
  background: "",
};

const Homepage = () => {
  // const [productList, setProductList] = useContext(ProductsContext);

  // console.log(productList);

  const test = "test message";

  const { loading, error, data } = useQuery(QUERY_ALL_PRODUCTS);
  console.log(data);
  const products = data?.products || [];
  if (loading) return "Loading...";
  if (error) return `ERORR! ${error.message}`;

  return (
    <div class="" style={homePageStyle}>
      {/* <ProductsProvider value={test}> */}
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
          </div>
        ))}
      </div>
      {/* </ProductsProvider> */}
    </div>
  );
};

export default Homepage;
