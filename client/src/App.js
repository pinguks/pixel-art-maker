import React, { Component } from "react";
import { connect } from "react-redux";

import Tools from "./components/Tools";
import Canvas from "./components/Canvas";
import Palette from "./components/Palette";

import { newCanvas } from "./actions";

class App extends Component {
  componentDidMount() {
    this.props.newCanvas();
  }

  render() {
    return (
      <div className="App">
        <Tools />
        <Canvas />
        <Palette />
      </div>
    );
  }
}

export default connect(
  null,
  { newCanvas }
)(App);
