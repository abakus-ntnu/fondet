import React, { Component } from "react";

class Header extends Component {
  render() {
    return <div className={this.props.className}>
      <h1>{this.props.text}</h1>
    </div>;
  }
}

export default Header;
