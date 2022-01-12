import React, { useState } from "react";
import useInputState from "../hooks/useInputState";

const EditToDoForm = (props) => {
  const [value, handleChange, clearValue] = useInputState(props.task);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e.target.value);
          props.toggleEditForm();
          clearValue();
        }}
      >
        <input
          type="text"
          className="
                  form-control form-control-lg
                  border-0
                  edit-todo-input
                  bg-transparent
                  rounded
                  px-3
                "
          autoFocus
          value={value}
          onChange={handleChange}
          onClick={(e) => e.stopPropagation()}
        />
      </form>
    </div>
  );
};

export default EditToDoForm;
