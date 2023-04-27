import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from "./components/App/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
		{/* <BrowserRouter> */}
    <BrowserRouter basename="/goit_test/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);