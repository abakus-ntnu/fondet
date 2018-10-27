import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Header from "../header/Header.js";
import Positions from "../positions/Positions.js";
import Development from "../development/Development.js";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Development />
        <Positions />
      </div>
    );
  }
}

export default App;
