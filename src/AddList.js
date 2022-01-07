import React from "react";

const AddList = (props) => {
  const styles = {
    forInput: {
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
  };
  return (
    <div style={styles.forInput}>
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
