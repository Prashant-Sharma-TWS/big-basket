import { combineReducers } from "@reduxjs/toolkit";
import { CartReducer } from "./cart/CartReducer";


export const reducer = combineReducers({
    cart:CartReducer
})