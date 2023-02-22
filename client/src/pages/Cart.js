import React, { useContext, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_PRODUCTS } from "../utils/queries";
import {
  getSavedProductList,
  removeProductIdFromProductList,
} from "../utils/localStorage";
import ProductsContext from "../utils/productsContext";

const Cart = () => {
  const { productList, setProductList } = useContext(ProductsContext);

  const { loading, error, data } = useQuery(QUERY_ALL_PRODUCTS);
  const products = data?.products || [];

  const getCartProducts = () => {
    return products.filter((product) => {
      return productList.includes(product._id);
    });
  };

  useEffect(() => {
    setProductList(getSavedProductList());
  }, []);

  const handleRemoveProduct = (productId) => {
    console.log(productId);
    removeProductIdFromProductList(productId);
    setProductList(getSavedProductList());
  };

  if (loading) return "Loading...";

  return (
    <div class="cart">
      {getCartProducts().length ? (
        getCartProducts().map((product) => (
          <div class="cartdiv">
            <img src={`/images/${product.image}`} />
            <br></br>
            <p>
              {" "}
              {product.name}
              <br></br>
              <button onClick={() => handleRemoveProduct(product._id)}>
                Remove from Cart
              </button>
            </p>
          </div>
        ))
      ) : (
        <p>No Items in Cart</p>
      )}
    </div>
  );
};

export default Cart;
