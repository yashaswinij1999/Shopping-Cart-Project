import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ShoppingContext, { shopContext } from "./Hooks/ShoppingContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <ShoppingContext>
        <App />
      </ShoppingContext>
    </React.StrictMode>
  </BrowserRouter>
);
