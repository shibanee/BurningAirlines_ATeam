import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SERVER_URL = "http://localhost:3000/flights.json";

class ShowFlight extends Component {
  constructor() {
    super();

    this.state = { flight: {} };
  }

  componentWillMount() {
    let index = this.props.match.params.id - 1;
    const fetchFlights = () => {
      axios
        .get(SERVER_URL)
        .then(results => this.setState({ flight: results.data[index] }));
    };

    fetchFlights();
  }

  render() {
    // console.log(flight);
    //
    // console.log(this.state.flights[0]);
    console.log(JSON.stringify(this.state.flight));
    return (
      <div>
        {this.state.flight.id ? (
          <div>
            <h1>Flight Info </h1>

            <table>
              <tr>
                <th>Flight Number</th>
                <th>Flight Date</th>
                <th>Flight Origin</th>
                <th>Flight Destination</th>
              </tr>
              <tr>
                <td>{this.state.flight.flight_no}</td>
                <td>{this.state.flight.date}</td>
                <td>{this.state.flight.origin}</td>
                <td>{this.state.flight.destination}</td>
              </tr>
            </table>
          </div>
        ) : (
          <p>Loading flight...</p>
        )}
      </div>
    );
  }
}

export default ShowFlight;

// <h3> {this.state.flights[0].destination} </h3>
// <pre>{JSON.stringify(this.state.flights)}</pre>
// <pre>{JSON.stringify(flight)}</pre>
// <FlightGallery flight={flight} />;
