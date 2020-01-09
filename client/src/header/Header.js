import React, { Component } from "react";

class Header extends Component {
  render() {
    return <div className={this.props.className}>{this.props.text}</div>;
  }
}

export default Header;
