import React from 'react';
import Iframe from 'react-iframe';

function Development() {
  return (
    <div className="shareville">
      <Iframe
        className="iframe"
        url="https://www.shareville.no/widget/portfolio/324475/yield?period=180"
        scrolling="yes"
        height="270px"
        margin="auto"
        display="inline-block"
        overflow="hidden"
      />
    </div>
  );
}

export default Development;
