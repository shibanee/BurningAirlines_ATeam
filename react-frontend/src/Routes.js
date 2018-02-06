import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Results from "./components/Results";

const Routes = (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/search/results" component={Results} />
    </div>
  </Router>
);

export default Routes;
