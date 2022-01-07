import React from "react";

const Todolist = (props) => {
    debugger
  return (
    <div>
      {props.todos.map((elem, i) => {
        return (
          <li key={i}>
            <span>{i + 1}: </span>
            {elem}
          </li>
        );
      })}
    </div>
  );
};

export default Todolist;
