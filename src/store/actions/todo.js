import { createTodo } from "../slices/todo";

export const addTodo = payload => ({
  type: createTodo,
  payload
});
