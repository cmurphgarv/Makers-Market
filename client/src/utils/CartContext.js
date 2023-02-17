import React, { createContext, useContext } from "react";

const CartContext = createContext();
const { Provider } = CartContext;

const CartProvider = ({ value = "TEST HELLO TEST", ...props }) => {
    return <Provider value={value} {...props} />;
};

const useCartContext = () => {
    return useContext(CartContext);
};

export { CartProvider, useCartContext };
