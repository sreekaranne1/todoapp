import AddToDo from "../components/AddToDo";
import TodoItem from "../components/TodoItem";
import React, { useEffect, useState } from "react";
import { getActiveTodo, insertData, deletetodo, edittodo } from "../DUMMY_DATA";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { update, fetchtodo } from "../Redux/actions/userActions";

const ActiveToDO = (props) => {
  const [addButton, setAddButton] = useState(true);
  const todos = useSelector((state) => state.todoList.items, shallowEqual);
  const filter = useSelector((state) => state.todoList.filter, shallowEqual);
  const sort = useSelector((state) => state.todoList.sort, shallowEqual);

  if (filter == "complete") {
    setAddButton(false);
  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchtodo());
  }, []);

  const addTodoHandler = (obj) => {
    console.log(obj);
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

  const toggleHandler = (id, obj) => {
    const editArr = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    dispatch(update(editArr));
    edittodo(obj);
    dispatch(fetchtodo());
  };
  const sortedArray = todos.sort((a, b) => {
    if (sort == "due-date-desc") {
      return new Date(a.selectedDate) - new Date(b.selectedDate);
    } else if (sort == "added-date-asc") {
      return new Date(b.AddedDate) - new Date(a.AddedDate);
    }
  });
  const filterTodos = sortedArray.filter((todo) =>
    todo.toDo.toLowerCase().includes(props.search.toLowerCase())
  );

  const listofTodos = props.search === "" ? [...sortedArray] : filterTodos;
  return (
    <div>
      {addButton && <AddToDo toDoHandler={addTodoHandler} />}
      <div className="row mx-1 px-5 pb-3 w-80">
        <div className="col mx-auto">
          {listofTodos.map((todo) => {
            if (filter === "active") {
              if (!todo.isComplete) {
                return (
                  <TodoItem
                    todo={todo}
                    deleteItem={deleteHandler}
                    editItem={editHandler}
                    toggleItem={toggleHandler}
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
                    toggleItem={toggleHandler}
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
