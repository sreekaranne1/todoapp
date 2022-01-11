import AddToDo from "../components/AddToDo";
import TodoItem from "../components/TodoItem";
import React, { useState } from "react";

const ActiveToDO = () => {
  const [todos, setTodos] = useState([]);
  const addTodoHandler = (obj) => {
    setTodos((prestate) => [...prestate, obj]);
  };
  console.log(todos);
  return (
    <div>
      <AddToDo toDoHandler={addTodoHandler} />
      <div className="row mx-1 px-5 pb-3 w-80">
        <div className="col mx-auto">
          <TodoItem />
          <TodoItem />
          <TodoItem />
        </div>
      </div>
    </div>
  );
};

export default ActiveToDO;
