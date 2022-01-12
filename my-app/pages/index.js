import AddToDo from "../components/AddToDo";
import TodoItem from "../components/TodoItem";
import React, { useEffect, useState } from "react";
import { getActiveTodo } from "../DUMMY_DATA";

const ActiveToDO = (props) => {
  const [todos, setTodos] = useState(props.data);

  const addTodoHandler = (obj) => {
    setTodos((prestate) => [...prestate, obj]);
  };
  console.log(todos);
  return (
    <div>
      <AddToDo toDoHandler={addTodoHandler} />
      <div className="row mx-1 px-5 pb-3 w-80">
        <div className="col mx-auto">
          {todos.map((todo) => {
            return <TodoItem todo={todo} />;
          })}
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const data = await getActiveTodo();
  return {
    props: {
      data: data,
    },
  };
}

export default ActiveToDO;
