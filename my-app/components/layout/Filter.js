import React from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { filtertodo, sorttodo } from "../../Redux/actions/userActions";

const Filter = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const changehandler = (event) => {
    dispatch(filtertodo(event.target.value));
    // if (value === "active") {
    //   router.push("/");
    // } else if (value === "completed") {
    //   router.push("/completed");
    // }
  };
  const sortChangeHandler = (event) => {
    dispatch(sorttodo(event.target.value));
  };
  return (
    <div>
      <div className="row m-1 p-1 px-5 justify-content-center">
        <div className="col-auto d-flex align-items-center">
          <label className="text-secondary my-2 pr-2 view-opt-label">
            Filter
          </label>
          <select
            className="custom-select custom-select-sm btn my-2"
            onChange={changehandler}
          >
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <div className="col-auto d-flex align-items-center px-1 pr-3">
          <label className="text-secondary my-2 pr-2 view-opt-label">
            Sort
          </label>
          <select
            className="custom-select custom-select-sm btn my-2"
            onChange={sortChangeHandler}
          >
            <option value="due-date-desc" selected>
              Due date
            </option>
            <option value="added-date-asc">Added date</option>
          </select>
          <i
            className="fa fa fa-sort-amount-asc text-info btn mx-0 px-0 pl-1"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Ascending"
          ></i>
          <i
            className="
              fa fa fa-sort-amount-desc
              text-info
              btn
              mx-0
              px-0
              pl-1
              d-none
            "
            data-toggle="tooltip"
            data-placement="bottom"
            title="Descending"
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Filter;
