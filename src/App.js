import React from "react";
import "./App.css";
import Todolist from "./Todolist";
import AddList from "./AddList";
const App = () => {
  const [value, setValue] = React.useState("");
  const [todo, setTodo] = React.useState(["Buy a new laptop"]);

  const valueChange = (e) => {
    setValue(e.target.value);
  };

  const formSubmit = (e) => {
    e.preventDefault();
  };

  let ifEmpty = 'The field must not be empty'

  const addList = () => {
    value === '' ? alert(ifEmpty) : setTodo(() => [...todo, value]);
    setValue("");
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
      <ul>
        <Todolist todos={todo} />
      </ul>
    </div>
  );
};

export default App;
