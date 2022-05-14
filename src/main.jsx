import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

import LayoutContext from "./context/layoutContext";

ReactDOM.render(
  <React.StrictMode>
    <LayoutContext>
      <App />
    </LayoutContext>
  </React.StrictMode>,
  document.getElementById("root")
);
