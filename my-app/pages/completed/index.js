import React, { useState } from "react";
import TodoItem from "../../components/TodoItem";
import { getCompletedTodo } from "../../DUMMY_DATA";

const Completed = (props) => {
  const [compTodos, setCompTodos] = useState(props.data);
  return (
    <div>
      <div className="row mx-1 px-5 pb-3 w-80">
        <div className="col mx-auto">
          {compTodos.map((todo) => {
            return <TodoItem todo={todo} />;
          })}
        </div>
      </div>
    </div>
  );
};
export async function getServerSideProps() {
  const data = await getCompletedTodo();
  return {
    props: {
      data: data,
    },
  };
}
export default Completed;
