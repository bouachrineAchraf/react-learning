import React, { Component } from 'react'

export const Task = (props) => {
    return (
      <div>
        {/* <div>{props.element.name} <button onClick={() => deleteElement(props.element.id)}>X</button></div> */}
        <div>{props.element.name} <button onClick={() => props.delete(props.element.id)}>X</button></div>
      </div>
    )
}

