import React from "react";

const namesList = props => {
  console.log(props.state.data);
  const listItems = props.state.data.map(data => (
    <p key={`${data.name}`}>
      <div className="name">
        <span style={{ color: data.color, fontSize: 20 }}>{"\u2022"}</span>{" "}
        <p>{data.name}</p>{" "}
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
