import React from "react";

const AddList = (props) => {
  return (
    <div>
      <form onSubmit={props.formSubmit}>
        <input
          placeholder="Write something"
          value={props.valueInput}
          onChange={props.valueChange}
        />
        <button onClick={props.addTodo}>Add List</button>
        {/* <p>{props.ifValueEmpty}</p> */}
      </form>
    </div>
  );
};

export default AddList;
