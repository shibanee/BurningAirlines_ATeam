import React, { Component } from 'react';
import axios from 'axios';
import AirplanesForm from './AirplanesForm';

const SERVER_URL = 'http://localhost:3000/airplanes.json';

// Display list of airplanes with JSX
function Gallery(props){
  return (
    <div>
      { props.airplanes.map( s =>
        <p key={ s.id }>
          <strong>Name:</strong> { s.name }<br/>
          <strong>Rows:</strong> { s.rows }<br/>
          <strong>Columns:</strong> { s.cols }
        </p> ) }

    </div>
  );
}

class Airplanes extends Component {
  // Constructing a state!
  constructor(){
    super();
    this.state = {
      airplanes: []
    };
    this.saveAirplane = this.saveAirplane.bind(this);
  }

  saveAirplane( rows, name ){
    console.log('saveAirplane:', name, rows);
    const data = { name: name, rows: rows };
    console.log('data', data);
    axios.post(SERVER_URL, data).then( results => {
      this.setState({
        airplanes: [ results.data, ...this.state.airplanes ]
      });
    });
  }

  componentWillMount(){
    const fetchAirplanes = () => {
      axios.get(SERVER_URL).then( results => this.setState({airplanes: results.data}) );
      // setTimeout( fetchAirplanes, 3000 );
    };
    fetchAirplanes();
  }


  render(){

    return (
      <div>
        {/* <pre>{JSON.stringify(this.state.airplanes, 1, 4)}</pre> */}
        <Gallery airplanes={ this.state.airplanes }/><br/>
        <AirplanesForm onSubmit={ this.saveAirplane } />
      </div>
    )
  }
}
export default Airplanes;
