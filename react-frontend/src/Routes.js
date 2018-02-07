import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import ShowFlight from "./components/ShowFlight";

const Routes = (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/flights/:id" component={ShowFlight} />
    </div>
  </Router>
);

export default Routes;
