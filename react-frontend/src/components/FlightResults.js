import React, { Component } from "react";
import axios from "axios";

const SERVER_URL = "http://localhost:3000/secrets.json";

function Gallery(props){
  return (
    <div>
      // {props.flights.map(f =>)}
    </div>
  )
}


class FlightResults extends Component {
  constructor() {
    super();

    this.state = {
      flights: []
    }

  // this.saveFlight = this.saveSecret.bind(this);

  }

  // saveFlight(Flight) {
  //   console.log("saveFlight:", flight);
  //   axios.post(SERVER_URL, { content: flight }).then(results => {
  //     this.setState({
  //       flights: [results.data, ...this.state.flights]
  //     });
  //     console.log(results);
  //   });
  // }

  componentWillMount(){
    const fetchFlights = () => {
      axios.get(SERVER_URL).then(results => setState({flights: results.data }));
    }

    setTimeout(fetchFlights, 3000)

  };

  fetchFlights();


  render() {
    return (
      <div>
        <h3>List of results</h3>
        <Gallery flights={this.state.flights}/>
      </div>
    );
  }
}

export default FlightResults;
