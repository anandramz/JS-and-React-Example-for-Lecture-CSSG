import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// load React application to root element in index.html
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);