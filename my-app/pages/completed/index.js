import React from "react";
import TodoItem from "../../components/TodoItem";

const Completed = () => {
  return (
    <div>
      <div className="row mx-1 px-5 pb-3 w-80">
        <div className="col mx-auto">
          <TodoItem />
          <TodoItem />
        </div>
      </div>
    </div>
  );
};

export default Completed;
