const initialState = {
  items: [],
  filter: "",
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
    default:
      console.log(["action.payload"]);
      return state;
  }
};
