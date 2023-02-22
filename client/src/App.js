import React, { useState, useEffect } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import './App.css';

import { ProductsProvider } from "./utils/productsContext";
import {
  getSavedProductList,
  addProductIdToProductList,
} from "./utils/localStorage";

import Nav from "./components/Nav";
import Cart from "./pages/Cart";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import SingleProduct from "./pages/SingleProduct";
import Logout from "./pages/Logout";
import OrderHistory from "./pages/OrderHistory";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [productList, setProductList] = useState(getSavedProductList());

  useEffect(() => {
    addProductIdToProductList(productList);
  });

  return (
    <ApolloProvider client={client}>
      <ProductsProvider value={{ productList: productList, setProductList }}>
        <Router>
          <Nav />

          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/logout" element={<Logout />} /> */}
            <Route path="/products/:productId" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/history" element={<OrderHistory />} />
          </Routes>
        </Router>
      </ProductsProvider>
    </ApolloProvider>
  );
}

export default App;
