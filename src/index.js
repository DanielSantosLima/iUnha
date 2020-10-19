import React from "react";
import ReactDom from "react-dom";
import "../node_modules/materialize-css/dist/css/materialize.css";
import { Login } from "./views/login";

function Main() {
  return <Login />;
}

ReactDom.render(<Main />, document.getElementById("root"));
