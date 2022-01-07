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
    forUl: {
      padding: "0px",
      margin: "0px, 2rem",
    },
  };
  return (
      <div className="App">
        <AddList
          formSubmit={formSubmit}
          valueInput={value}
          valueChange={valueChange}
          addTodo={addList}
          ifValueEmpty={ifEmpty}
        />
        <ul style={styles.forUl}>
          <Todolist todos={todo} />
        </ul>
      </div>
  );
};

export default App;
