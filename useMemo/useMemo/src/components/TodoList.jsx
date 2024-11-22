import React, { useState, useMemo } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Do homework', completed: true },
    { id: 3, text: 'Go grocery shopping', completed: false },
  ]);

  const [filter, setFilter] = useState('all'); // 'all', 'completed', 'incomplete'

  // Usa useMemo per memorizzare la lista filtrata
  const filteredTodos = useMemo(() => {
    if (filter === 'completed') {
      return todos.filter(todo => todo.completed);
    } else if (filter === 'incomplete') {
      return todos.filter(todo => !todo.completed);
    }
    return todos; // 'all'
  }, [todos, filter]); // Dipendenze: cambia se la lista di todos o il filtro cambiano

  const handleToggle = (id) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('incomplete')}>Incomplete</button>
      </div>
      <ul>
        {filteredTodos.map(todo => (
          <li key={todo.id}>
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button onClick={() => handleToggle(todo.id)}>
              {todo.completed ? 'Mark Incomplete' : 'Mark Completed'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
