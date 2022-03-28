import { configureStore } from "@reduxjs/toolkit";
import { CartReducer } from "./cart/CartReducer";
import counterReducer from "./counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: CartReducer
  },
});
