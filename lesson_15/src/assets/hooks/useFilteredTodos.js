import { useState, useEffect } from 'react';

function useFilteredTodos(todos, searchTerm) {
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    const filtered = todos.filter(todo =>
      todo.text.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTodos(filtered);
  }, [todos, searchTerm]);

  return filteredTodos;
}

export default useFilteredTodos;