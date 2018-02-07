import React, { Component } from "react";
import SearchForm from "./SearchForm";
import FlightGallery from "./FlightGallery";

class Home extends Component {

  callHome(){

  }

  render() {
    return (
      <div>
        <h1>Home_Page</h1>
        <SearchForm />
        <FlightGallery />
      </div>
    );
  }
}

export default Home;
