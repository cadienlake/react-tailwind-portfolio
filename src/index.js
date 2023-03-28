import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// The ReactDOM.render method is used to render a react element into the actual DOM
// The first argument is the component we want to render, and the second is the container element on the page
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/react-tailwind-portfolio">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
// ReactDOM.render(<App />, document.getElementById("root"));
