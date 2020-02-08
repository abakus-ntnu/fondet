import React, { Component } from "react";

class Header extends Component {
  render() {
    return <div className={this.props.className}>
      <a href={this.props.href}>{this.props.text}</a>
    </div>;
  }
}

export default Header;
