import React from "react";

const namesList = props => {
  console.log(props.state.data);
  const listItems = props.state.data.map(data => (
    <p key={`${data.name}`}>
      <div className="name">
          <p>
              {data.percent.toFixed(2)} {" %"}
          </p>
          <p>
              {(data.one_month ? data.one_month : 0) + " %"}
          </p>
          <a href={data.url}>{data.name}</a>{" "}
          <p>{data.desc}</p>
      </div>
    </p>
  ));

  return (
    <div className="namesList">
        <h3>"Beholdning","Avkastning siste måned","Fond","Beskrivelse"</h3>
      {listItems.reverse()}
    </div>
  );
};

export default namesList;
