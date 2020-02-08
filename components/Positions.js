import axios from "axios";
import React, { Component } from "react";
import PieChart from "./PieChart.js";
import NamesList from "./NamesList.js";

class Positions extends Component {
  constructor() {
    super();
    this.state = {
      res: [],
      data: [],
      colorScale: [
        "rgb(72, 207, 212)",
        "rgb(33, 161, 166)",
        "rgb(13, 124, 128)",
        "rgb(202, 101, 165)",
        "rgb(217, 110, 110)",
        "rgb(200, 85, 85)",
        "rgb(234, 236, 102)",
        "rgb(168, 217, 110)",
        "rgb(227, 227, 227)"
      ]
    };
  }

  async componentDidMount() {
    const res = await axios.get("/api/positions");
    this.setState({ res: res.data });
    var cashCount = 0;
    for (var i = 0; i < res.data.length; i++) {
      this.setState({
        data: [
          ...this.state.data,
          {
            name: res.data[i].instrument.name,
            percent: res.data[i].percent,
            color: this.state.colorScale[i],
            url: res.data[i].instrument.prospectus_url,
            desc: res.data[i].instrument.category,
            one_month: res.data[i].instrument.performance_one_month
          }
        ]
      });

      cashCount += res.data[i].percent;
    }
    this.setState({
      data: [
        ...this.state.data,
        {
          name: "Kontanter",
          percent: 100 - cashCount,
          color: this.state.colorScale[this.state.colorScale.length - 1]
        }
      ]
    });
    this.setState({ data: this.state.data.sort(this.sortData) });
  }

  sortData = (a, b) => {
    return a.percent - b.percent;
  };

  render() {
    return (
      <div className="markets">
        <h2>Fondets fordeling</h2>
        <div className="positions">
          <NamesList state={this.state} />
        </div>
      </div>
    );
  }
}

export default Positions;
