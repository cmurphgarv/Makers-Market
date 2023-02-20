<<<<<<< HEAD
import { React, useState } from "react";
import { useCartContext } from "../utils/CartContext";

const Cart = () => {
  const cart = useCartContext();
  return <div>{cart.length}</div>;
=======
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

  const productListLength = Object.keys(productList).length;

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
    <div>
      {getCartProducts().length ? (
        getCartProducts().map((product) => (
          <div>
            <img src={`/images/${product.image}`} />
            <p>{product.name}</p>
            <button onClick={() => handleRemoveProduct(product._id)}>
              Remove from Cart
            </button>
          </div>
        ))
      ) : (
        <p>No Items in Cart</p>
      )}
    </div>
  );
>>>>>>> f2fa38d0167104a65c0c5564c5c8db856c07f9a5
};

export default Cart;
