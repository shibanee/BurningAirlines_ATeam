import React, { Component } from "react";

class SearchForm extends Component {
  constructor() {
    super();
    this.state = { query: "" };
    this._handleInput = this._handleInput.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    //Direct user to FlightResults;
  }

  _handleInput(e) {
    this.setState({ query: e.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this._handleSubmit}>
          <input type="text" onInput={this._handleInput} />
          <button type="submit">Search Flights</button>
        </form>
      </div>
    );
  }
}

export default SearchForm;
