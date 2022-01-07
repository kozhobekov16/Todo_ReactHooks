import React from "react";
import { Input, FormGroup } from "reactstrap";
const AddList = (props) => {
  const styles = {
    forInput: {
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    forBtn:{
        whiteSpace: 'nowrap'
    }
  };
  return (
    <div style={styles.forInput}>
      <form onSubmit={props.formSubmit}>
        <FormGroup style={{display: 'flex'}}>
          <Input
            placeholder="Write something"
            value={props.valueInput}
            onChange={props.valueChange}
          />
          <button className="btn btn-success" style={styles.forBtn} onClick={props.addTodo}>
            Add List
          </button>
        </FormGroup>

        {/* <p>{props.ifValueEmpty}</p> */}
      </form>
    </div>
  );
};

export default AddList;
