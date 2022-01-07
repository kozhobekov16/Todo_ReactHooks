import React from "react";
import "./App.css";
import Todolist from "./Todolist";
const App = () => {
  const [value, setValue] = React.useState("");
  const [todo, setTodo] = React.useState(["Buy a new laptop"]);

  const valueChange = (e) => {
    setValue(e.target.value);
  };

  const formSubmit = (e) => {
    e.preventDefault();
  };

  const addList = () => {
    setTodo(() => [...todo, value]);
    setValue("");
  };
  return (
    <div className="App">
      <form onSubmit={formSubmit}>
        <input
          placeholder="Write something"
          value={value}
          onChange={valueChange}
        />
        <button onClick={addList}>Add List</button>
      </form>
      <ul>
      <Todolist todos={todo}/> 
      </ul>
    </div>
  );
};

export default App;
