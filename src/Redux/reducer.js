import { combineReducers } from "@reduxjs/toolkit";
import { CartReducer } from "./cart/CartReducer";
import { authReducer } from "./Auth/auth.reducer";
import filterReducer from "./Filter/filterReduce";
import { userReducer } from "./User/user.reducer";

export const reducer = combineReducers({
  user: userReducer,
  auth: authReducer,
  filter: filterReducer,
  cart: CartReducer,
});
