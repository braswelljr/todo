import { createSlice } from "@reduxjs/toolkit";

const todo = createSlice({
  name: `todo`,
  initialState: {
    value: {}
  },
  reducers: {
    createTodo: (state, actions) => (state.value = actions.payload),
    deleteTodo: (state, actions) =>
      state.value.filter(todo => todo !== actions.payload),
    markAsDone: (state, actions) => (state.value[actions.payload].done = true),
    markAsUndone: (state, actions) =>
      (state.value[actions.payload].done = false)
  }
});

export const { createTodo } = todo.actions;

export default todo.reducer;
