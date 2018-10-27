import React from "react";

const namesList = props => {
  console.log(props.state.data);
  const listItems = props.state.data.map(data => (
    <p key={`${data.name}`}>
      <span style={{ color: data.color, fontSize: 20 }}>{"\u2022"}</span>{" "}
      {data.name} {data.percent.toFixed(2)}
      {" %"}
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
