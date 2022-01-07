import React from "react";
import Todolist from "./Todolist";
import AddList from "./AddList";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
const App = ({ fromServer }) => {
  const [value, setValue] = React.useState("");
  const [todo, setTodo] = React.useState([fromServer]);

  const valueChange = (e) => {
    setValue(e.target.value);
  };

  const formSubmit = (e) => {
    e.preventDefault();
  };

  let ifEmpty = "The field must not be empty";

  const addList = () => {
    value === ""
      ? alert(ifEmpty) && <p>Nothing</p>
      : setTodo(() => [...todo, value]);
    setValue("");
  };
  const styles = {
    app: {
      backgroundColor: "black",
      marginTop: "5rem",
      borderRadius: "6px",
      padding: "30px",
    },
    forUl: {
      padding: "0px",
      margin: "0px, 2rem",
    },
    Jumbotron: {
      padding: "4rem 2rem",
      marginBottom: "2rem",
      borderRadius: ".3rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
  };
  return (
    <section style={styles.app} className="container">
      <div>
        <h1 className="text-secondary">Todo List</h1>
        <AddList
          formSubmit={formSubmit}
          valueInput={value}
          valueChange={valueChange}
          addTodo={addList}
          style={styles.forInput}
        />
        {value === "" ? <h2>Enter text in input</h2> : null}
        <ul style={styles.forUl}>
          <Todolist todos={todo} />
        </ul>
      </div>
    </section>
  );
};

export default App;
