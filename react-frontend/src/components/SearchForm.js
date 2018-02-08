import React, { Component } from "react";

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      origin: "sydney",
      destination: "brisbane"
    };
    this._handleInput = this._handleInput.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit( e ) {
    e.preventDefault();
    this.props.onSubmit(this.state.origin, this.state.destination);
  }

  _handleInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this._handleSubmit}>
          <input name="origin" type="text" value={this.state.origin} onChange={this._handleInput}  />
          <input name="destination" type="text" value={this.state.destination} onChange={this._handleInput} />
          <button type="submit">Search Flights</button>
        </form>
      </div>
    );
  }
}

export default SearchForm;
