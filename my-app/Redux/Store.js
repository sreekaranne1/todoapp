import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { userReducer } from "./reducers/userReducer";

//reducers

const reducers = combineReducers({ todoList: userReducer });

const middleware = [thunk];

const Store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default Store;
