import React from "react";
import Iframe from "react-iframe";

const Positions = () => {
  return (
    <div className="positions">
      <Iframe url="https://www.shareville.no/widget/portfolio/324475/positions?limit=10" />
    </div>
  );
};

export default Positions;
