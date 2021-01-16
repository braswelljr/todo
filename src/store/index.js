import { configureStore } from "@reduxjs/toolkit";
import allTodos from "./slices/Todos";

export default configureStore({
  reducer: {
    todos: allTodos
  }
});
