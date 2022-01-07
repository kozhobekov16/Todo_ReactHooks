import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
const Todolist = (props) => {
  return (
    <div>
      {props.todos.map((elem, i) => {
        return (
            <ListGroup key={i}>
              <ListGroupItem color="info">
                <span>{i + 1}: </span>
                {elem}
              </ListGroupItem>
            </ListGroup>
        );
      })}
    </div>
  );
};

export default Todolist;
