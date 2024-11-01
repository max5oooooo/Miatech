import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    removeTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    completeTodo: (state, action) => {
        const todo = state.find(todo => todo.id === action.payload);
        if (todo) {
          todo.completed = true;
        }
      },
  },
});

export const { addTodo, removeTodo, toggleTodo, completeTodo } = todosSlice.actions;

export default todosSlice.reducer;
