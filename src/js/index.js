"use strict";
import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/home";
import store from "../store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
const domContainer = ReactDOM.createRoot(document.getElementById("app"));
domContainer.render(<App />);

const serverurl = process.env.SERVER_API;

console.log("Dev m3", serverurl);
