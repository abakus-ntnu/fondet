import React, { Component } from "react";
import Header from "../header/Header.js";

class HeaderWrap extends Component {
  render() {
    return <div className={"headerWrap"}>
      <Header className="header left" text="ABAKUS FOND" />
      <Header className="header center" text="abakus.no/fond" />
      <Header className="header right" text="Statutter" />
    </div>;
  }
}

export default HeaderWrap;
