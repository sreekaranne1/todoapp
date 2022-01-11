import React from "react";

const Filter = () => {
  return (
    <div>
      <div class="row m-1 p-1 px-5 justify-content-center">
        <div class="col-auto d-flex align-items-center">
          <label class="text-secondary my-2 pr-2 view-opt-label">Filter</label>
          <select class="custom-select custom-select-sm btn my-2">
            <option value="completed">Completed</option>
            <option value="active">Active</option>
          </select>
        </div>
        <div class="col-auto d-flex align-items-center px-1 pr-3">
          <label class="text-secondary my-2 pr-2 view-opt-label">Sort</label>
          <select class="custom-select custom-select-sm btn my-2">
            <option value="added-date-asc" selected>
              Added date
            </option>
            <option value="due-date-desc">Due date</option>
          </select>
          <i
            class="fa fa fa-sort-amount-asc text-info btn mx-0 px-0 pl-1"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Ascending"
          ></i>
          <i
            class="
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
