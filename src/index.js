import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { FilterReducerProvider } from "./context/FilterReducer.context";
import { CartProvider } from "./context/Cart.context";
import { WishlistProvider } from "./context/Wishlist.context";
import { AuthProvider } from "./context/Auth.context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <FilterReducerProvider>
      <CartProvider>
        <WishlistProvider>
          <AuthProvider>
            <Router>
              <App />
            </Router>
          </AuthProvider>
        </WishlistProvider>
      </CartProvider>
    </FilterReducerProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
