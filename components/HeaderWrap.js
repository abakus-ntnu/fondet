import React, { Component } from "react";
import Header from "../header/Header.js";

class HeaderWrap extends Component {
  render() {
    return <div className={"headerWrap"}>
      <Header className="header left stretch" text="Abakus fond" />
      <Header className="header center stretch" text="abakus.no/fond" href={"https://abakus.no/pages/generelt/46-fondstyret"}/>
      <Header className="header right stretch" text="Statutter" href={"https://statutter.abakus.no/fond/"}/>
    </div>;
  }
}

export default HeaderWrap;
