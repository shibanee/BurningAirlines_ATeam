import React, {Component} from 'react';
import SearchForm from './SearchForm';
import axios from 'axios';
import {Link} from 'react-router-dom';


const SEARCH_URL = 'http://localhost:3000/flights/search.json';


function Gallery(props){
  return (
    <div>
      { props.flights.length
        ?
        props.flights.map( s =>
        <p key={ s.id }> <strong>Destination:</strong> <Link to={`/flights/${s.id}`}>{ s.origin } - { s.destination }</Link></p> )
        :
        <p>Please enter an origin and destination above.</p>
        }
    </div>
  );
}

class Home extends Component {

  constructor(){
    super();
    this.state = {
      flights: []
    };
    this.fetchResults = this.fetchResults.bind( this );
  }

  fetchResults( origin, destination ){
    console.log('Phoned home with:', origin, destination);
    console.log('this: ', this);
    const fetchResults = () => {
      axios.get(SEARCH_URL,
      {
        params: {
          origin: origin,
          destination: destination
      }}).then( results => this.setState({flights: results.data}) );
      // setTimeout( fetchReservations, 3000 );
    };
    fetchResults();
    };

  render(){
    return (
      <div>
        <h1>Flickr Search</h1>
        <SearchForm onSubmit={ this.fetchResults } />
        <Gallery flights={ this.state.flights }/><br/>
      </div>
    );
  }
}

export default Home;
