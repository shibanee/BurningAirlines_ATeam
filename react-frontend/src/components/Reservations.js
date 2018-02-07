import React, { Component } from 'react';
import axios from 'axios';
import ReservationsForm from './ReservationsForm';

const SERVER_URL = 'http://localhost:3000/reservations.json';

// Display list of reservations with JSX
function Gallery(props){
  return (
    <div>
      { props.reservations.map( s =>
        <p key={ s.id }>
          <strong>Name:</strong> { s.name }<br/>
          <strong>Flight ID:</strong> { s.flight_id }<br/>
        </p> ) }

    </div>
  );
}

class Reservations extends Component {
  // Constructing a state!
  constructor(){
    super();
    this.state = {
      reservations: []
    };
    this.saveReservation = this.saveReservation.bind(this);
  }

  saveReservation( flightNumber, name ){
    console.log('saveReservation:', name, flightNumber);
    const data = { name: name, flight_num: flightNumber };
    axios.post(SERVER_URL, data).then( results => {
      this.setState({
        reservations: [ results.data, ...this.state.reservations ]
      });
    });
  }

  componentWillMount(){
    const fetchReservations = () => {
      axios.get(SERVER_URL).then( results => this.setState({reservations: results.data}) );
      // setTimeout( fetchReservations, 3000 );
    };
    fetchReservations();
  }


  render(){

    return (
      <div>
        {/* <pre>{JSON.stringify(this.state.reservations, 1, 4)}</pre> */}
        <Gallery reservations={ this.state.reservations }/><br/>
        <ReservationsForm onSubmit={ this.saveReservation } />
      </div>
    )
  }
}
export default Reservations;
