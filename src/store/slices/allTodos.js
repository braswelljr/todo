import { createSlice } from "@reduxjs/toolkit";

export const allTodos = createSlice({
  name: `alltodos`,
  initialState: {
    value: JSON.parse(localStorage.getItem(`todos`))
  },
  reducers: {
    alltodos: state => state.value.map(todo => todo),
    markAllDone: state => state.value.map(todo => (todo.done = true)),
    markAllUndone: state => state.value.map(todo => (todo.done = false)),
    deleteAllTodos: state => (state.value = [])
  }
});

export const {
  alltodos,
  markAllDone,
  markAllUndone,
  deleteAllTodos
} = allTodos.actions;

export const Todos = state => state.todos.value;

export default allTodos.reducer;
