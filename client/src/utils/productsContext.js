import React, { useState } from "react";

const ProductsContext = React.createContext();

export const ProductsProvider = ProductsContext.Provider;

export default ProductsContext;
