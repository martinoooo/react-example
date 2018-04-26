import React from 'react';

/**
 * Note that 传递refs only works if this is declared as a class:
 */
export default class TextInput extends React.Component {
  render() {
    return (<input type="text" ref={this.props.textInput} />);
  }
}
