import React, { Component } from "react";
import "./App.css";
import Header from "../header/Header.js";
import Positions from "../positions/Positions.js";
import Development from "../development/Development.js";
import Numbers from "../numbers/Numbers.js";
import Philosophy from "../philosophy/Philosophy.js";

class App extends Component {
  render() {
    return (
      <div className="app" >
        <Header text="ABAKUS FOND" />
        <Development />
        <Positions />
        <Numbers />
        <Philosophy />
      </div>
    );
  }
}

export default App;
