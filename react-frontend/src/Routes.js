import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import ShowFlight from "./components/ShowFlight";
import Airplanes from "./components/Airplanes";
import Users from "./components/Users";
import Reservations from "./components/Reservations";

const Routes = (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/flights/:id" component={ShowFlight} />
      <Route exact path="/airplanes" component={Airplanes} />
      <Route exact path="/users" component={Users} />
      <Route exact path="/reservations" component={Reservations} />
    </div>
  </Router>
);

export default Routes;
