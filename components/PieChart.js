import React from 'react';

import { PieChart, Pie, Tooltip, Cell } from 'recharts';

const renderLabel = entry => `${entry.name} - ${entry.value} % `;

const colorScale = [
  'rgb(72, 207, 212)',
  'rgb(33, 161, 166)',
  'rgb(13, 124, 128)',
  'rgb(202, 101, 165)',
  'rgb(217, 110, 110)',
  'rgb(200, 85, 85)',
  'rgb(204, 204, 0)',
  'rgb(168, 217, 110)',
  'rgb(200, 200, 200)',
];

const Chart = props => (
  <PieChart width={1000} height={280}>
    <Pie
      data={props.positions}
      innerRadius={30}
      outerRadius={100}
      label={renderLabel}
    >
      {props.positions.map((entry, i) => (
        <Cell key={entry.name} fill={colorScale[i % colorScale.length]} />
      ))}
    </Pie>
    <Tooltip />
  </PieChart>
);

export default Chart;
