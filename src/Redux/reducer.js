import { combineReducers } from "@reduxjs/toolkit";
import { CartReducer } from "./cart/CartReducer";
import { authReducer } from "./Auth/auth.reducer";
import filterReducer from "./Filter/filterReduce";

export const reducer = combineReducers({
    cart:CartReducer,
    auth: authReducer,
    filter: filterReducer,
})
