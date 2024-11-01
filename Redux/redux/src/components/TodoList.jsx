import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo, toggleTodo, completeTodo } from '../store/todosSlice';


const TodoList = () => {
  const [inputValue, setInputValue] = useState('');
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      dispatch(addTodo({ id: Date.now(), text: inputValue, completed: false }));
      setInputValue('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Aggiungi un to-do..."
      />
      <button onClick={handleAddTodo}>Aggiungi</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button onClick={() => dispatch(completeTodo(todo.id))}>Completa</button>
            <button onClick={() => dispatch(toggleTodo(todo.id))}>Toggle</button>
            <button onClick={() => dispatch(removeTodo(todo.id))}>Rimuovi</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
