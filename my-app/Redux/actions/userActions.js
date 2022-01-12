import { getAllTodos } from "../../DUMMY_DATA";
export const update = (todos) => async (dispatch) => {
  dispatch({
    type: "UPDATE",
    payload: todos,
  });
};

export const fetchtodo = () => async (dispatch) => {
  const todos = await getAllTodos();
  dispatch({
    type: "FETCH",
    payload: todos,
  });
};

export const filtertodo = (filter) => async (dispatch) => {
  dispatch({
    type: "FILTER",
    payload: filter,
  });
};

export const sorttodo = (sort) => async (dispatch) => {
  dispatch({
    type: "SORT",
    payload: sort,
  });
};
