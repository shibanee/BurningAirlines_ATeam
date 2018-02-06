import React, { Component } from "react";
import SearchFlights from "./SearchFlights";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home_Page</h1>
        <h4>Table of flights</h4>
        <SearchFlights />
      </div>
    );
  }
}

export default Home;
