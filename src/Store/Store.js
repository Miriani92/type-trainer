import { configureStore } from "@reduxjs/toolkit";
import wordSliceReducer from "./Slice";

const store = configureStore({
  reducer: { words: wordSliceReducer },
});

export default store;
