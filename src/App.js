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

  const ContainerBlock = styled.section`
    background-color: black;
    margin-top: 10rem;
    border-radius: 6px;
  `
  const Jumbotron = styled.div`
    padding: 4rem 2rem;,
    margin-bottom: 2rem;
    border-radius: .3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `
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
    <ContainerBlock className="container">
      <Jumbotron>
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
      </Jumbotron>
    </ContainerBlock>
  );
};

export default App;
