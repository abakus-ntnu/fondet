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
      <th>{"Last 180 days"}</th>
      <th>{"Last Month"}</th>
      <th>{"Name"}</th>
      <th>{"Description"}</th>
  </tr>);

  return (
    <div className="namesList">
      {listItems.reverse()}
    </div>
  );
};

export default namesList;
