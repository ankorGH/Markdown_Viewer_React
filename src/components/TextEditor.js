import React, { Component } from "react";
import "../TextEditor.css";

class TextEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.text
    };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
    this.props.onDataChange(this.state.value);
  }
  render() {
    return (
      <textarea
        className="editor"
        value={this.state.value}
        onChange={this.handleChange}
      />
    );
  }
}

export default TextEditor;
