import React from 'react';

import List from './List';
import PieChart from './PieChart';

const Positions = props => {
  const formattedPositions = props.positions.map(position => ({
    name: position.instrument.name,
    value: parseFloat(position.percent.toFixed(2)),
    url: position.instrument.prospectus_url,
    desc: position.instrument.category,
    one_month: position.instrument.performance_one_month,
  }));
  const cashCount = props.positions.reduce((a, b) => a - b.percent, 100);
  const data = [
    ...formattedPositions,
    {
      name: 'Kontanter',
      value: parseFloat(cashCount.toFixed(2)),
    },
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
