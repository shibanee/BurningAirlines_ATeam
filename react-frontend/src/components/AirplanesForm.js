import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AirplanesForm extends Component {

  constructor(){
    super();
    this.state = {
      name: '',
      rows: ''
    };
    this._handleSubmit = this._handleSubmit.bind( this );
    this._handleChange = this._handleChange.bind( this );
  }

  _handleSubmit( e ){
    e.preventDefault();
    this.props.onSubmit( this.state.rows, this.state.name );
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
        <input name="rows"  placeholder="Rows" value={this.state.rows} onInput={ this._handleChange } /><br/>
        <input type="submit" value="Add New Airplanes" />
      </form>
    );
  }
}

AirplanesForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default AirplanesForm;
