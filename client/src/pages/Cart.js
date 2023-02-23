import React, { useContext, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ALL_PRODUCTS } from "../utils/queries";
import { ADD_ORDER } from "../utils/mutations";
import { Link } from "react-router-dom";
import {
  getSavedProductList,
  removeProductIdFromProductList,
  clearProductList,
} from "../utils/localStorage";
import ProductsContext from "../utils/productsContext";

const Cart = () => {
  const { productList, setProductList } = useContext(ProductsContext);

  const { loading, error, data } = useQuery(QUERY_ALL_PRODUCTS);
  const products = data?.products || [];

  const [addOrder, { orderError, orderData }] = useMutation(ADD_ORDER);

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

  const checkout = async (productList) => {
    try {
      console.log(productList);
      await addOrder({
        variables: { products: productList },
      });
      console.log(data.addOrder);
    } catch (error) {
      console.log(error);
    }

    clearProductList();
    let delay = 1000;
    setTimeout(function () {
      window.location.href = "/";
    }, delay);
    alert("Thanks for your order! You will be contacted by email shortly.");
  };

  if (loading) return "Loading...";
  let checkoutb;
  if (getSavedProductList().length > 0) {
    checkoutb = (
      <button class="checkoutButton" onClick={() => checkout(productList)}>
        Ready to Checkout
      </button>
    );
  } else {
    checkoutb = "";
  }
  return (
    <div class="cart">
      <div class="checkoutButton">{checkoutb}</div>
      {getCartProducts().length ? (
        getCartProducts().map((product) => (
          <div class="cartdiv">
            <img src={`/images/${product.image}`} />
            <br></br>
            <p>
              {" "}
              {product.name}
              <br></br>${product.price}
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
