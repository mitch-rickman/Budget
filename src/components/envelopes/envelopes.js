import React from 'react';
require('./envelopes.css');

function ListItem(props) {
  return (
    <li>
      <span className="envelopes__name">{props.name}: </span>
      <span className="envelopes__value">{props.value}</span>
    </li>
  );
}

function Envelopes(props) {
  const values = props.values;
  const list = values.map((value) => {
    return <ListItem key={value.name} name={value.name} value={value.value} />
  });

  return (
    <ul>
      {list}
    </ul>
  );
}

export default Envelopes;
