import React, { Component } from "react";
import Header from "../header/Header";
import Numbers from "../numbers/Numbers";
import "./Root.css";

class Root extends Component {
  render() {
    return (
      <div className="root">
        <Header text={"HER KOMMER FONDET"} />
        <Numbers />
      </div>
    );
  }
}

export default Root;
