import React from "react-dom/client";
import ReactDOM from "react-dom/client";
import "../node_modules/bootstrap/dist/js/bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./index.css";
import Routing from "./Route";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Routing />);
