import React from 'react';

export default function InputSection(props) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <label htmlFor={props.id}>{props.name}</label>
      <input id={props.id} type={props.type} value={props.value} onChange={props.change}/>
    </div>
  );
}
