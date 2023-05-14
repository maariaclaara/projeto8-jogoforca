import React from "react";
import ReactDOM from "react-dom"
import "../src/css/reset.css";
import "../src/css/style.css";
import App from "./App"


const root = App();
ReactDOM.render(root, document.querySelector(".root"));