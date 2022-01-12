import AddToDo from "../components/AddToDo";
import TodoItem from "../components/TodoItem";
import React, { useEffect, useState } from "react";
import { getActiveTodo, insertData, deletetodo, edittodo } from "../DUMMY_DATA";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { update, fetchtodo } from "../Redux/actions/userActions";

const ActiveToDO = (props) => {
  const todos = useSelector((state) => state.todoList.items, shallowEqual);
  const filter = useSelector((state) => state.todoList.filter, shallowEqual);

  const addButton = filter === "active" ? true : false;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchtodo());
  }, []);
  const addTodoHandler = (obj) => {
    insertData(obj);
    const newTodo = [obj, ...todos];
    dispatch(update(newTodo));
  };

  const deleteHandler = (obj) => {
    const removeArr = todos.filter((todo) => {
      return todo.id !== obj.id;
    });
    dispatch(update(removeArr));

    deletetodo(obj);
  };

  const editHandler = (id, value, obj) => {
    const editArr = todos.map((todo) => {
      if (todo.id === id) {
        todo.value = value;
      }
      return todo;
    });
    dispatch(update(editArr));
    edittodo(obj);
  };
  return (
    <div>
      {addButton && <AddToDo toDoHandler={addTodoHandler} />}
      <div className="row mx-1 px-5 pb-3 w-80">
        <div className="col mx-auto">
          {todos.map((todo) => {
            if (filter === "active") {
              if (!todo.isComplete) {
                return (
                  <TodoItem
                    todo={todo}
                    deleteItem={deleteHandler}
                    editItem={editHandler}
                  />
                );
              }
            } else if (filter === "completed") {
              if (todo.isComplete) {
                return (
                  <TodoItem
                    todo={todo}
                    deleteItem={deleteHandler}
                    editItem={editHandler}
                  />
                );
              }
            }
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
