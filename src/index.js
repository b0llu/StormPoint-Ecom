import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ReducerProvider } from "./context/useReducer.context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ReducerProvider>
        <App />
      </ReducerProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
