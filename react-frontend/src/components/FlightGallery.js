import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SERVER_URL = "http://localhost:3000/flights.json";

function Gallery(props) {
  return (
    <div>
      <table>
        <tr>
          <th>LINK</th>
          <th>Flight Number</th>
          <th>Flight Date</th>
          <th>Flight Origin</th>
          <th>Flight Destination</th>
        </tr>
        {props.flights.map(f => (
          <tr>
            <td>
              {" "}
              <Link
                to={`/flights/${f.id}`}
                style={{ display: "inline", marginLeft: "10px" }}
              >
                {" "}
                Book{" "}
              </Link>
            </td>
            <td>{f.flight_no}</td>
            <td>{f.date}</td>
            <td>{f.origin}</td>
            <td>{f.destination}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

class FlightGallery extends Component {
  constructor() {
    super();
    this.state = {
      flights: []
    };
  }

  componentWillMount() {
    const fetchFlights = () => {
      axios
        .get(SERVER_URL)
        .then(results => this.setState({ flights: results.data }));

      setTimeout(fetchFlights, 3000);
    };

    fetchFlights();
  }

  render() {
    return (
      <div>
        <Gallery flights={this.state.flights} />
      </div>
    );
  }
}

export default FlightGallery;
