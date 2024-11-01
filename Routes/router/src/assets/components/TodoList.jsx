import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';



const TodoList = () => {
  const todos = [
    { id: 1, title: 'Learn React' },
    { id: 2, title: 'Learn Redux' },
    { id: 3, title: 'Build a Todo App' },
  ];
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');

  // Recupera il termine di ricerca dai parametri
  useEffect(() => {
    const term = searchParams.get('search') || '';
    setSearchTerm(term);
  }, [searchParams]);

  // Filtra i todo in base al termine di ricerca
  const filteredTodos = todos.filter(todo =>
    todo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Gestisce il cambiamento dell'input
  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    
    // Aggiorna i parametri di ricerca
    setSearchParams({ search: value });
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
