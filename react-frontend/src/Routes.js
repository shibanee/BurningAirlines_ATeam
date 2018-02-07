import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
<<<<<<< HEAD
import ShowFlight from "./components/ShowFlight";
=======
import Airplanes from "./components/Airplanes";
import Users from "./components/Users";
import Reservations from "./components/Reservations";
>>>>>>> c8f051aaf285fff9c0d8dc4ebff7d0571ca8a3e2

const Routes = (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
<<<<<<< HEAD
      <Route path="/flights/:id" component={ShowFlight} />
=======
      <Route exact path="/airplanes" component={Airplanes} />
      <Route exact path="/users" component={Users} />
      <Route exact path="/reservations" component={Reservations} />
>>>>>>> c8f051aaf285fff9c0d8dc4ebff7d0571ca8a3e2
    </div>
  </Router>
);

export default Routes;
