import React from "react";
import Todolist from "./Todolist";
import AddList from "./AddList";
import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron as Jumbo } from "reactstrap";
const App = () => {
  const [value, setValue] = React.useState("");
  const [todo, setTodo] = React.useState(["Buy a new laptop"]);

  const valueChange = (e) => {
    setValue(e.target.value);
  };

  const formSubmit = (e) => {
    e.preventDefault();
  };

  let ifEmpty = "The field must not be empty";

  const addList = (e) => {
    // if (e.key === "Enter") {
    value === "" ? alert(ifEmpty) : setTodo(() => [...todo, value]);
    setValue("");
  };
  const styles = {
    app: {
      backgroundColor: "blue",
    },
    forUl: {
      padding: "0px",
      margin: "0px, 2rem",
    },
    jumbotron: {
      padding: "4rem 2rem",
      marginBottom: "2rem",
      backgroundColor: "var(--bs-light)",
      borderRadius: ".3rem",
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }
  };
  return (
    <div style={styles.app}>
      <div style={styles.jumbotron}>
        <AddList
          formSubmit={formSubmit}
          valueInput={value}
          valueChange={valueChange}
          addTodo={addList}
          style={styles.forInput}
        />
        <ul style={styles.forUl}>
          <Todolist todos={todo} />
        </ul>
      </div>
    </div>
  );
};

export default App;
