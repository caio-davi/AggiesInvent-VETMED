import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route } from "react-router-dom";

import "./index.css";
import App from "./App";

const Wrapper = () => (
  <Router>
    <Route path="/:view?/" render={(props) => <App {...props} />} />
  </Router>
);

ReactDOM.render(<Wrapper />, document.getElementById("root"));
