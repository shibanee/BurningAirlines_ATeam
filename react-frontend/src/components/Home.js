import React, {Component} from 'react';
import SearchForm from './SearchForm';
import axios from 'axios';

const SERVER_URL = 'http://localhost:3000/flights.json';

function Gallery(props){
  return (
    <div>
      { props.origin.map( s =>
        <p key={ s.id }>
          <strong>Name:</strong> { s.origin }</p> ) }

    </div>
  );
}

class Home extends Component {

  constructor(){
    super();
    this.state = {
      origin: []
    };
    this.fetchOrigin = this.fetchOrigin.bind( this );
  }

  fetchOrigin( query ){
    console.log('Phoned home with:', query);
    console.log('this: ', this);
    const fetchResults = () => {
      axios.get(SERVER_URL).then( results => this.setState({origin: results.data}) );
      // setTimeout( fetchReservations, 3000 );
    };
    fetchResults();
    };

  render(){
    return (
      <div>
        <h1>Flickr Search</h1>
        <SearchForm onSubmit={ this.fetchOrigin } />
        <Gallery origin={ this.state.origin }/><br/>
      </div>
    );
  }
}

export default Home;
