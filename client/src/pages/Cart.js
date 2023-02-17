import { React, useState } from "react";
import { useCartContext } from "../utils/CartContext";

const Cart = () => {
  const cart = useCartContext();
  return <div>{cart.length}</div>;
};

export default Cart;
