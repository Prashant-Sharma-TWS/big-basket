import { combineReducers } from "redux";
import { authReducer } from "./Auth/auth.reducer";
import filterReducer from "./Filter/filterReduce";

export const reducer = combineReducers({
  auth: authReducer,
  filter: filterReducer,
});
