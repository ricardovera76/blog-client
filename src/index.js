import React from "react";
import ReactDOM from "react-dom/client";
import Provider from "./context/Provider";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "normalize.css";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
