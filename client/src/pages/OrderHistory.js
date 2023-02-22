import React, { useEffect, useContext } from "react";
import ProductsContext from "../utils/productsContext";
import { getSavedProductList } from "../utils/localStorage";
import { QUERY_ALL_PRODUCTS } from "../utils/queries";
import { useQuery } from "@apollo/client";

const OrderHistory = () => {
  const { productList, setProductList } = useContext(ProductsContext);

  const { loading, error, data } = useQuery(QUERY_ALL_PRODUCTS);
  const products = data?.products || [];

  const getOrderHistory = () => {
    return products.filter((product) => {
      return productList.includes(product._id);
    });
  };

  useEffect(() => {
    setProductList(getSavedProductList());
  }, []);

  return (
    <div>
      {getOrderHistory().length ? (
        getOrderHistory().map((product) => (
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
};

export default OrderHistory;
