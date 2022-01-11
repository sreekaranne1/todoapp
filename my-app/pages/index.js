import AddToDo from "../components/AddToDo";
import TodoItem from "../components/TodoItem";
import React from "react";

const ActiveToDO = () => {
  return (
    <div>
      <AddToDo />
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
