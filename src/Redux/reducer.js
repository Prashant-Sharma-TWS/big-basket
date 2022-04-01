import { combineReducers } from "redux";
import { authReducer } from "./Auth/auth.reducer";
import filterReducer from "./Filter/filterReduce";
import { userReducer } from "./User/user.reducer";

export const reducer = combineReducers({
  user: userReducer,
  auth: authReducer,
  filter: filterReducer,
});
