import React from "react";
import { VictoryPie } from "victory";

const pieChart = props => {
  const colorList = props.state.data.reverse().map(data => data.color);
  return (
    <div className="pieChart">
      <VictoryPie
        data={props.state.data}
        sortKey="percent"
        sortOrder="descending"
        x="name"
        y="percent"
        radius={150}
        labels={d => `${d.percent.toFixed(2)}%`}
        labelRadius={120}
        style={{ labels: { fontSize: 10, color: "black" } }}
        colorScale={colorList}
        padding={{ top: 20, bottom: 60 }}
      />
    </div>
  );
};

export default pieChart;
