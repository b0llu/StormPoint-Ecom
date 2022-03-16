import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { FilterReducerProvider } from "./context/useFilterReducer.context";
import { useSignUp } from "./Hook/useSignUp";

// Call make Server
makeServer();
useSignUp();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <FilterReducerProvider>
        <App />
      </FilterReducerProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
