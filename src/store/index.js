import { configureStore } from "@reduxjs/toolkit";
import allTodos from "./slices/allTodos";

export default configureStore({
  reducer: {
    todos: allTodos
  }
});
