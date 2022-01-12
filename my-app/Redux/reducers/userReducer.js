const initialState = {
  items: [],
  filter: "action",
  sort: "due-date-desc",
};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE":
      return { ...state, items: action.payload };
    case "FETCH":
      return {
        ...state,
        items: action.payload,
      };
    case "FILTER":
      return {
        ...state,
        filter: action.payload,
      };
    case "SORT":
      return {
        ...state,
        sort: action.payload,
      };
    default:
      console.log(["action.payload"]);
      return state;
  }
};
