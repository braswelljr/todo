import { configureStore } from "@reduxjs/toolkit";
import Todos from "./slices/todos";

export default configureStore({
  reducer: {
    todos: Todos
  }
});
