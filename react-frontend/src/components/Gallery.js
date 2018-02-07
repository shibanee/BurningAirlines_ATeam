import React, {Component} from 'react';

function Text(props){
  return (
     <img src={props.origin}/>
  );
}

class Gallery extends Component {
  render(){
    return(
      <div>
        <h2>Search Results</h2>
        {this.props.origin}
      </div>
    );
  }
}

export default Gallery;
