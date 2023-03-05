import React from "react-dom/client";
import ReactDOM from "react-dom/client";
import "../node_modules/bootstrap/dist/js/bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./index.css";
import Routing from "./Route";
import { BrowserRouter } from "react-router-dom";
import Wrapper from "./store/Wrapper";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Wrapper>
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  </Wrapper>
);
