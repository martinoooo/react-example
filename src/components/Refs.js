import React from 'react';
import TextInput from './TextInput';

export default class Refs extends React.Component {
  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.textInput = React.createRef();
    this.textInput2 = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  componentDidMount() {
    this.textInput2.current.focus();
  }

  focusTextInput() {
    // Explicitly focus the text input using the raw DOM API
    // Note: we're accessing "current" to get the DOM node
    this.textInput.current.focus();
  }

  render() {
    // tell React that we want to associate the <input> ref
    // with the `textInput` that we created in the constructor
    return (
      <div>
        <input
          type="text"
          ref={this.textInput} />

        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />

        <TextInput textInput={this.textInput2}></TextInput>
      </div>
    );
  }
}
