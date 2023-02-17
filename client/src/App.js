import React, { useState } from "react";
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

import Nav from "./components/Nav";
import Cart from "./pages/Cart";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import SingleProduct from "./pages/SingleProduct";

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
  const [productList, setProductList] = useState([]);

  return (
    <ApolloProvider client={client}>
      <ProductsProvider value={{ productList, setProductList }}>
        <Router>
          <div>
            <Nav />
            <div>
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/login" element={<Login />} />
                <Route
                  path="/products/:productId"
                  element={<SingleProduct />}
                />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </div>
          </div>
        </Router>
      </ProductsProvider>
    </ApolloProvider>
  );
}

export default App;
