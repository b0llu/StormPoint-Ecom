import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { FilterReducerProvider } from "./context/FilterReducer.context";
import { useSignUp } from "./Hook/useSignUp";
import { CartProvider } from "./context/Cart.context";
import { WishlistProvider } from "./context/Wishlist.context";

// Call make Server
makeServer();
useSignUp();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <FilterReducerProvider>
        <CartProvider>
          <WishlistProvider>
            <App />
          </WishlistProvider>
        </CartProvider>
      </FilterReducerProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
