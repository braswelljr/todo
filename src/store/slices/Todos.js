import { createSlice } from "@reduxjs/toolkit";

export const allTodos = createSlice({
  name: `allTodos`,
  initialState: {
    value: []
  },
  reducers: {
    alltodos: state => state.value.map(todo => todo),
    markAllDone: state => state.value.map(todo => (todo.done = true)),
    deleteAllTodos: state => (state.value = [] ?? null)
  }
});

export const { alltodos, markAllDone, deleteAllTodos } = allTodos.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = state => state.counter.value;

export default allTodos.reducer;
