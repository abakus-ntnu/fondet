import React, { Component } from "react";
import "./Numbers.css";

class Number extends Component {
  render() {
    return <div className={"number"}>{this.props.number}</div>;
  }
}

class Numbers extends Component {
  state = {
    money: 2480000
  };

  componentDidMount() {
    this.interval = setInterval(
      () => this.setState({ money: this.state.money + 1 }),
      20
    );
  }

  render() {
    const money = this.state.money;
    const numbers = money
      .toString(10)
      .split("")
      .map(num => <Number number={num} />);
    return <div className="numbers">{numbers}</div>;
  }
}

export default Numbers;
