import React from 'react';

const namesList = (props) => {
  const listItems = props.positions.map((data) => {
    // Returns a style object
    const color =
      data.one_month < 0 ? { color: '#c0392b' } : { color: 'green' };

    return (
      <tr key={`${data.name}`}>
        <td>{`${data.value} %`}</td>
        <td style={color}>{`${data.one_month ? data.one_month : 0} %`}</td>
        <td>
          <a className="name" href={data.url}>
            {data.name}
          </a>
        </td>
        <td>{data.desc}</td>
      </tr>
    );
  });

  return (
    <>
      <h2>Siste utvikling</h2>
      <table className="namesList">
        <thead key="header">
          <tr>
            <th width="12%">Eierandel</th>
            <th width="18%">Siste måned</th>
            <th width="50%">Navn</th>
            <th>Beskrivelse</th>
          </tr>
        </thead>
        <tbody>{listItems}</tbody>
      </table>
    </>
  );
};

export default namesList;
