import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';



const TodoList = () => {
  const todos = [
    { id: 1, title: 'Learn React' },
    { id: 2, title: 'Learn Redux' },
    { id: 3, title: 'Build a Todo App' },
  ];
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Ottieni il termine di ricerca direttamente dai parametri della query
  const searchTerm = searchParams.get('search') || '';

  // Filtra i task in base al termine di ricerca
  const filteredTodos = todos.filter(todo =>
    todo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Gestisce il cambio del termine di ricerca
  const handleSearchChange = (e) => {
    const newSearchTerm = e.target.value;
    if (newSearchTerm) {
      setSearchParams({ search: newSearchTerm });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div>
          <h1 className="text-3xl text-red-500 font-bold underline">
      Todo List
    </h1>
    <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Cerca todo..."
      />
      <ul>
        {filteredTodos.map(todo => (
          <li key={todo.id}>
            <Link to={`/todo/${todo.id}`}>{todo.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
