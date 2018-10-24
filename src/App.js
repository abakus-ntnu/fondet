import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./header/Header.js";
import Positions from "./positions/Positions.js";
import Development from "./development/Development.js";

class App extends Component {
  render() {
    return (
      <div>
        <header />
        <Development />
        <Positions />
      </div>
    );
  }
}

export default App;
