import React from "react";

const namesList = props => {
  console.log(props.state.data);
  const listItems = props.state.data.map(data => (
    <p key={`${data.name}`}>
      <div className="name">
        <a href={data.url}>{data.name}</a>{" "}
        <p>
          {data.percent.toFixed(2)} {" %"}
        </p>
      </div>
    </p>
  ));
  return (
    <div className="namesList">
      <h4>Beskrivelse:</h4>
      {listItems}
    </div>
  );
};

export default namesList;
