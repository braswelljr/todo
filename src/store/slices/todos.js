import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const Todos = createSlice({
  name: `todos`,
  initialState: JSON.parse(localStorage.getItem(`todos`)),
  reducers: {
    alltodos: state => void state.map(todo => todo),
    markAllDone: state => void state.map(todo => (todo.done = true)),
    markAllUndone: state => void state.map(todo => (todo.done = false)),
    deleteAllTodos: state => void (state == []),
    create: (state, action) =>
      void state.push({
        id: uuidv4(),
        title: action.payload.title,
        content: action.payload.content,
        isComplete: false,
        created_at: new Date().toISOString()
      }),
    edit: (state, action) => {
      const { id, title, content } = action.payload;
      const index = state.find(todo => todo.id === id);

      if (index) {
        index.title = title;
        index.content = content;
      }
    },
    toggleComplete: (state, action) => {
      const { payload } = action;
      const index = state.find(todo => todo.id == payload);

      if (index) {
        index.isComplete = !index.isComplete;
      }
    },
    deleteTodo: (state, action) => {
      const { payload } = action;
      const index = state.findIndex(todo => todo.id == payload);

      if (index !== -1) {
        state.splice(index, 1);
      }
    }
  }
});

export const {
  alltodos,
  markAllDone,
  markAllUndone,
  deleteAllTodos,
  create,
  edit,
  deleteTodo,
  toggleComplete
} = Todos.actions;

export default Todos.reducer;
