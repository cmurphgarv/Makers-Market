import React, { useEffect, useContext } from "react";
import ProductsContext from "../utils/productsContext";
import { getSavedProductList } from "../utils/localStorage";
import { QUERY_ALL_PRODUCTS, QUERY_USER } from "../utils/queries";
import { useQuery } from "@apollo/client";

const OrderHistory = () => {
  // const { productList, setProductList } = useContext(ProductsContext);

  // const { loading, error, data } = useQuery(QUERY_ALL_PRODUCTS);
  // const products = data?.products || [];

  const { loading, error, data } = useQuery(QUERY_USER);
  const user = data?.user || [];
  console.log(user.orders);

  // const getOrderHistory = () => {
  //   return products.filter((product) => {
  //     return productList.includes(product._id);
  //   });
  // };

  // useEffect(() => {
  //   setProductList(getSavedProductList());
  // }, []);

  return (
    <div>
      {user.orders.length ? (
        user.orders.map((product) => (
          <div class="cartdiv">
            <img src={`/images/${product.image}`} />
            <br></br>
            <p>
              {" "}
              {product.name}
              <br></br>
            </p>
          </div>
        ))
      ) : (
        <p>No Items in Cart</p>
      )}
    </div>
  );

  // if (loading) return <h1>Loading...</h1>;

  // if (error) return <h1>ERROR! {error.message}</h1>;

  // return <div>{user}</div>;
};

export default OrderHistory;
