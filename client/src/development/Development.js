import React from "react";
import Iframe from "react-iframe";

const Development = () => {
  return (
    <div className="development">
      <Iframe
        url="https://www.shareville.no/widget/portfolio/324475/yield?period=180"
        scrolling="yes"
        width="80%"
        height="300px"
        margin="auto"
        display= "inline-block"
        overflow="hidden"
      />
    </div>
  );
};

export default Development;
