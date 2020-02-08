import React from "react";
import Iframe from "react-iframe";

const Development = () => {
  return (
    <div className="development">
      <h2>
        <i>For deg og fremtidige abakuler</i>
      </h2>
      <Iframe
        className={"iframeDev"}
        url="https://www.shareville.no/widget/portfolio/324475/yield?period=180"
        scrolling="yes"
        height="270px"
        margin="auto"
        display="inline-block"
        overflow="hidden"
      />
    </div>
  );
};

export default Development;
