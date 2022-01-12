import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const AddToDo = (props) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [toDo, setToDo] = useState("");

  const clickHandler = () => {
    if (toDo && selectedDate) {
      const year = selectedDate.getUTCFullYear();
      const month = selectedDate.getUTCMonth() + 1;
      const date = selectedDate.getUTCDate();
      const addDate = new Date();
      const curryear = addDate.getUTCFullYear();
      const currmonth = addDate.getUTCMonth() + 1;
      const currdate = addDate.getUTCDate();
      const data = {
        toDo,
        AddedDate: `${curryear}-${currmonth}-${currdate}`,
        selectedDate: `${year}-${month}-${date}`,
        isComplete: false,
      };

      props.toDoHandler(data);
      setToDo("");
      setSelectedDate(new Date());
    }
  };
  return (
    <div>
      <div className="row m-1 p-3">
        <div className="col col-11 mx-auto">
          <div
            className="
          row
          bg-white
          rounded
          shadow-sm
          p-2
          add-todo-wrapper
          align-items-center
          justify-content-center
        "
          >
            <div className="col">
              <input
                className="
              form-control form-control-lg
              border-0
              add-todo-input
              bg-transparent
              rounded
            "
                type="text"
                placeholder="Add new .."
                value={toDo}
                onChange={(event) => {
                  setToDo(event.target.value);
                }}
              />
            </div>
            <div className="col-auto m-0 px-2 d-flex align-items-center">
              <DatePicker
                selected={selectedDate}
                onChange={(date) => {
                  setSelectedDate(date);
                }}
                dateFormat="dd/MM/yyyy"
                isClearable
                showYearDropdown
                scrollableMonthYearDropdown
              />
              <i
                className="
              fa fa-calendar
              my-2
              px-1
              text-primary
              btn
              due-date-button
            "
                data-toggle="tooltip"
                data-placement="bottom"
                title="Set a Due date"
              ></i>
            </div>
            <div className="col-auto px-0 mx-0 mr-2">
              <button
                type="button"
                className="btn btn-primary"
                onClick={clickHandler}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToDo;
