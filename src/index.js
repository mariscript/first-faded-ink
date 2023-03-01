import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";

/* GLOBAL VARIABLES */

window.$haircuts = "en";
window.$tattoos = "pl";
window.$haircutsIconId = "primary-lang-icon";
window.$tattoosIconId = "secondary-lang-icon";

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.register();
