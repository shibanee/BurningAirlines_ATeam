import React, {Component} from 'react';
import PropTypes from 'prop-types';

class reservationsForm extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      flight_num: ''
    };
    this._handleSubmit = this._handleSubmit.bind( this );
    this._handleChange = this._handleChange.bind( this );
  }

  _handleSubmit( e ){
    e.preventDefault();
    this.props.onSubmit( this.state.name, this.state.flight_num );
  }

  _handleChange( e ){
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  render(){
    return (
      <form onSubmit={ this._handleSubmit } >
        <input name="name" placeholder="Name" value={this.state.name} onInput={ this._handleChange } /><br/>
        <input name="flight_num" placeholder="Flight Number" value={this.state.flight_num} onInput={ this._handleChange } /><br/>
        <input type="submit" value="Reserve" />
      </form>
    );
  }
}

reservationsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default reservationsForm;
