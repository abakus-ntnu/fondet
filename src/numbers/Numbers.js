import React, { Component } from "react";
import "./Numbers.css";

class Number extends Component {
  render() {
    return <div className={"number"}>{this.props.number}</div>;
  }
}

class Numbers extends Component {
  render() {
    const random = []
    for (let index = 0; index < 8; index++) {
      random.push(Math.floor((Math.random() * 9) + 1));
      console.log(random)
    }
    const numbers = random.map(num => <Number number={num} />);
    return <div className="numbers">{numbers}</div>;
  }
}

export default Numbers;
