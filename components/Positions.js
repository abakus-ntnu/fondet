import axios from "axios";
import React, { Component } from "react";

import List from "./List";
import PieChart from "./PieChart";

export const colorScale = [
  "rgb(72, 207, 212)",
  "rgb(33, 161, 166)",
  "rgb(13, 124, 128)",
  "rgb(202, 101, 165)",
  "rgb(217, 110, 110)",
  "rgb(200, 85, 85)",
  "rgb(204, 204, 0)",
  "rgb(168, 217, 110)",
  "rgb(200, 200, 200)"
];

const Positions = props => {
  const formattedPositions = props.positions.map((position, i) => ({
    name: position.instrument.name,
    value: parseFloat(position.percent.toFixed(2)),
    color: colorScale[i],
    url: position.instrument.prospectus_url,
    desc: position.instrument.category,
    one_month: position.instrument.performance_one_month
  }));
  const cashCount = props.positions.reduce((a, b) => a - b.percent, 100);
  const data = [
    ...formattedPositions,
    {
      name: "Kontanter",
      value: parseFloat(cashCount.toFixed(2)),
      colode: colorScale[colorScale.length - 1]
    }
  ];

  return (
    <div className="section">
      <h2>Fondets fordeling</h2>
      <PieChart positions={data} />
      <List positions={data} />
    </div>
  );
};

export default Positions;
