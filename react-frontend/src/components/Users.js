import React, { Component } from 'react';
import axios from 'axios';

const SERVER_URL = 'http://localhost:3000/users.json';

// Display list of users with JSX
function Gallery(props){
  return (
    <div>
      { props.users.map( s =>
        <p key={ s.id }>
          Name: { s.name }<br/>
          Email: { s.email }<br/>
        </p> ) }

    </div>
  );
}

class Users extends Component {
  // Constructing a state!
  constructor(){
    super();
    this.state = {
      users: []
    };
    this.saveUser = this.saveUser.bind(this);
  }

  saveUser( user ){
    console.log('saveUser:', user);
    axios.post(SERVER_URL, { content: user }).then( results => {
      this.setState({
        users: [ results.data, ...this.state.users ]
      });
    });
  }

  componentWillMount(){
    const fetchUsers = () => {
      axios.get(SERVER_URL).then( results => this.setState({users: results.data}) );
      setTimeout( fetchUsers, 3000 );
    };
    fetchUsers();
  }

  render(){
    return (
      <div>
        <Gallery users={ this.state.users }/>
      </div>
    )
  }
}
export default Users;
