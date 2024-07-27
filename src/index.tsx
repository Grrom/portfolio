import React from "react";
import ReactDOM from "react-dom";

import "./global_styles/index.scss";
import App from "./components/app";
import { observer } from "./helper";

window.onload! = function () {
  [".skill", ".title", ".skill-category", "span", "p"].forEach(
    (elementQuery) => {
      document.querySelectorAll(elementQuery).forEach((element) => {
        observer("fade-slide-up").observe(element);
      });
    }
  );

  document.querySelectorAll(".project-screenshot").forEach((image) => {
    observer("scale-in", "50px").observe(image);
  });
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
