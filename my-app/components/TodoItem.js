import React from "react";
import EditToDoForm from "./EditToDoForm";
import useToggleState from "../hooks/useToggleState";

const TodoItem = (props) => {
  const { todo } = props;
  const [isEditing, toggle] = useToggleState(false);
  const deleteHandler = (e) => {
    e.stopPropagation();
    props.deleteItem(todo);
  };
  const toggling = (e) => {
    props.toggleItem(todo.id, todo);
  };
  if (isEditing) {
    return (
      <div
        className="row
    bg-white
    rounded
    shadow-sm
    p-2
    add-todo-wrapper
    align-items-center
    justify-content-center todo-row"
        style={{ margin: "2%" }}
      >
        <EditToDoForm
          task={todo}
          toggleEditForm={toggle}
          editItem={props.editItem}
        />
      </div>
    );
  }

  return (
    <div
      className="row
    bg-white
    rounded
    shadow-sm
    p-2
    add-todo-wrapper
    align-items-center
    justify-content-center todo-row"
      style={{ margin: "2%" }}
    >
      <div className="row px-3 align-items-center todo-item rounded">
        <div className="col-auto m-1 p-0 d-flex align-items-center">
          <h2 className="m-0 p-0">
            {!todo.isComplete ? (
              <i
                className="fa fa-square-o text-primary btn m-0 p-0 "
                data-toggle="tooltip"
                data-placement="bottom"
                title="Mark as complete"
                onClick={toggling}
              ></i>
            ) : (
              <i
                className="fa fa-check-square-o text-primary btn m-0 p-0"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Mark as todo"
                onClick={toggling}
              ></i>
            )}
          </h2>
        </div>
        <div className="col px-1 m-1 d-flex align-items-center">
          {/* <input
            type="text"
            className="
                  form-control form-control-lg
                  border-0
                  edit-todo-input
                  bg-transparent
                  rounded
                  px-3
                "
            readonly
            value="Buy groceries for next week"
            title="Buy groceries for next week"
          /> */}
          {todo.toDo}
        </div>
        <div className="col-auto m-1 p-0 px-3 ">
          <div className="row">
            <div
              className="
                    col-auto
                    d-flex
                    align-items-center
                    rounded
                    bg-white
                    border border-warning
                  "
            >
              <i
                className="fa fa-hourglass-2 my-2 px-2 text-warning btn"
                data-toggle="tooltip"
                data-placement="bottom"
                title=""
                data-original-title="Due on date"
              ></i>
              <h6 className="text my-2 pr-2">{todo.selectedDate}</h6>
            </div>
          </div>
        </div>
        <div
          className="col-auto m-1 p-0 todo-actions"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <div className="row d-flex align-items-center justify-content-end">
            <h5 className="m-0 p-0 px-2">
              <i
                className="fa fa-pencil text-info btn m-0 p-0"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Edit todo"
                onClick={(e) => {
                  e.stopPropagation();
                  toggle();
                }}
              ></i>
            </h5>
            <h5 className="m-0 p-0 px-2">
              <i
                className="fa fa-trash-o text-danger btn m-0 p-0"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Delete todo"
                onClick={deleteHandler}
              ></i>
            </h5>
          </div>
          <div className="row todo-created-info">
            <div className="col-auto d-flex align-items-center pr-2">
              <i
                className="fa fa-info-circle my-2 px-2 text-black-50 btn"
                data-toggle="tooltip"
                data-placement="bottom"
                title=""
                data-original-title="Created date"
              ></i>
              <label className="date-label my-2 text-black-50">
                {todo.AddedDate}
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
