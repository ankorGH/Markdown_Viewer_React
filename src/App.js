import React, { Component } from "react";
import TextEditor from "./components/TextEditor";
import Viewer from "./components/Viewer";
import Marked from "marked";
import Text from "./customText";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: Text,
      userText: Marked(Text)
    };
    this.changeData = this.changeData.bind(this);
  }
  changeData(value) {
    this.setState({ userText: Marked(value) });
  }
  render() {
    return (
      <div>
        <TextEditor text={this.state.text} onDataChange={this.changeData} />
        <Viewer marked={this.state.userText} />
      </div>
    );
  }
}

export default App;
