import axios from "axios";
import React, { Component } from "react";
import PieChart from "./PieChart.js";
import NamesList from "./NamesList.js";

const colorScale = [
  "rgb(72, 207, 212)",
  "rgb(33, 161, 166)",
  "rgb(13, 124, 128)",
  "rgb(202, 101, 165)",
  "rgb(217, 110, 110)",
  "rgb(200, 85, 85)",
  "rgb(234, 236, 102)",
  "rgb(168, 217, 110)",
  "rgb(227, 227, 227)"
];

const Positions = props => {
  const formattedPositions = props.positions.map((position, i) => ({
    name: position.instrument.name,
    percent: position.percent,
    color: colorScale[i],
    url: position.instrument.prospectus_url,
    desc: position.instrument.category,
    one_month: position.instrument.performance_one_month
  }));
  const cashCount = props.positions.reduce((a, b) => a + b.percent, 0);
  const data = [
    ...formattedPositions,
    {
      name: "Kontanter",
      percent: 100 - cashCount,
      color: colorScale[colorScale.length - 1]
    }
  ];

  return (
    <div className="markets">
      <h2>Fondets fordeling</h2>
      <div className="positions">
        <NamesList positions={data} />
      </div>
    </div>
  );
};

export default Positions;
