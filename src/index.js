import "../src/css/reset.css";
import "../src/css/style.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";


const root = App();
ReactDOM.render(root, document.querySelector(".root"));