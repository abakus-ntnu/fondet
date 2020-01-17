import React from "react";

const namesList = props => {
  console.log(props.state.data);
  const listItems = props.state.data.map(data => (
        <tr key={`${data.name}`}>
              <td>
                  {data.percent.toFixed(2)} {" %"}
              </td>
              <td>
                  {(data.one_month ? data.one_month : 0) + " %"}
              </td>
              <td><a href={data.url}>{data.name}</a></td>{" "}
              <td>{data.desc}</td>
        </tr>
  ));
  listItems.push(<tr key={"header"}>
      <th>{"Eierandel"}</th>
      <th>{"Utvikling siste måned"}</th>
      <th>{"Navn"}</th>
      <th>{"Beskrivelse"}</th>
  </tr>);

  return (
    <div className="namesList">
      {listItems.reverse()}
    </div>
  );
};

export default namesList;
