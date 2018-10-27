import axios from "axios";
import React, { Component } from "react";
import { VictoryPie } from "victory";

class Positions extends Component {
  constructor() {
    super();
    this.state = { res: [], data: [] };
  }
  //Getting info from nordnet-api and cleaning for victorypie
  async componentDidMount() {
    const res = await axios.get("/api/v1/portfolios/324475/positions");
    this.setState({ res: res.data });
    console.log(res.data.length);
    console.log(res.data[0].instrument.name);
    for (var i = 0; i < res.data.length; i++) {
      this.setState({
        data: [
          ...this.state.data,
          { name: res.data[i].instrument.name, percent: res.data[i].percent }
        ]
      });
    }
  }

  render() {
    return (
      <div>
        <VictoryPie
          data={this.state.data}
          x="name"
          y="percent"
          radius={100}
          style={{
            labels: { fill: "black", fontSize: 5, fontWeight: "bold" }
          }}
        />
      </div>
    );
  }
}

export default Positions;
