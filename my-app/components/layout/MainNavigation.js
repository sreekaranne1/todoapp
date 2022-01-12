import React from "react";

const MainNavigation = (props) => {
  const changeHandler = (event) => {
    props.searchInput(event.target.value);
  };
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div className="row m-1 p-4">
          <div className="col">
            <div className="p-1 h1 text-primary text-center mx-auto display-inline-block">
              <i
                className="fa fa-check bg-primary text-white rounded p-2"
                style={{ marginRight: "10px" }}
              ></i>
              <u>To Do</u>
            </div>
          </div>
        </div>
        <div className="row m-1 p-4">
          <div className="col">
            <div className="p-1 h1 text-primary text-center mx-auto display-inline-block">
              <div
                className="
              row
              bg-white
              rounded
              shadow-sm
              add-todo-wrapper
            "
                style={{ height: 50 }}
              >
                <input
                  className="
                  form-control form-control-lg
                  border-0
                  add-todo-input
                  bg-transparent
                  rounded
                "
                  type="text"
                  placeholder="Search"
                  onChange={changeHandler}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNavigation;
