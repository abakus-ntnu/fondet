import React from "react";

const namesList = props => {
  const listItems = props.state.data.map(data => (
    <tr key={`${data.name}`}>
      <td>
        {data.percent.toFixed(2)} {" %"}
      </td>
      <td className={data.one_month < 0 ? "redText" : "greenText"}>
        {(data.one_month ? data.one_month : 0) + " %"}
      </td>
      <td>
        <a className={"name"} href={data.url}>
          {data.name}
        </a>
      </td>
      <td>{data.desc}</td>
    </tr>
  ));

  return (
    <table className="namesList">
      <thead key={"header"}>
        <tr>
          <th>{"Eierandel"}</th>
          <th>{"Utvikling siste måned"}</th>
          <th>{"Navn"}</th>
          <th>{"Beskrivelse"}</th>
        </tr>
      </thead>
      <tbody>{listItems.reverse()}</tbody>
    </table>
  );
};

export default namesList;
