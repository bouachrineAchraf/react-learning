import React, { Component, useState } from 'react';

export const Task = (props) => {
    const [color, setColor] = useState("white")

    const changeColor = () => {
        setColor("green")
    }
  return (
    <div>
      <div style={{ backgroundColor: color }}>
        <span >{props.element.name}</span>
        <button onClick={() => props.delete(props.element.id)}>X</button>
        <div></div>
        <button onClick={() => changeColor()}>complete</button>
      </div>
    </div>
  );
};
