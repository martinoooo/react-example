import React from 'react';

class Fragments extends React.Component {
  render() {
    return (
      <React.Fragment>
        <li>{this.props.message + '1'}</li>
        <li>{this.props.message + '2'}</li>
      </React.Fragment>
    );
  }
}

export default Fragments;
