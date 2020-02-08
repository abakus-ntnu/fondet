import React from "react";
import { PieChart, Pie, Legend, Tooltip, Cell } from "recharts";
import { colorScale } from "./Positions";

const renderLabel = function(entry) {
  return `${entry.name} - ${entry.value} % `;
};

const Chart = props => {
  console.log(props.positions);
  return (
    <PieChart width={1000} height={280}>
      <Pie
        data={props.positions}
        innerRadius={30}
        outerRadius={100}
        label={renderLabel}
      >
        {props.positions.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={colorScale[index % colorScale.length]}
          />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};

export default Chart;
