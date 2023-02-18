import React, { useContext, useEffect } from "react";
import { getSavedProductList } from "../utils/localStorage";
import ProductsContext from "../utils/productsContext";

const Cart = () => {
  const { productList, setProductList } = useContext(ProductsContext);

  useEffect(() => {
    setProductList(getSavedProductList());
  }, []);

  return (
    <div>
      <h1>Cart Component</h1>
      {productList.map((productId) => (
        <li>{productId}</li>
      ))}
    </div>
  );
};

export default Cart;
