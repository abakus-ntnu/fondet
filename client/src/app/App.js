import React, { Component } from "react";
import "./App.css";
import HeaderWrap from "../header/HeaderWrap.js";
import Positions from "../positions/Positions.js";
import Development from "../development/Development.js";
import Numbers from "../numbers/Numbers.js";
import Philosophy from "../philosophy/Philosophy.js";
import History from "../history/History.js";

class App extends Component {
  render() {
    return (
      <div className="app" >
          <HeaderWrap/>
        <Development />
        <Positions />
        <Numbers />
        <Philosophy />
        <History />
      </div>
    );
  }
}

export default App;
