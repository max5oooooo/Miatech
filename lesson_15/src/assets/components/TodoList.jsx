import { useCallback, useEffect, useRef, useState } from "react";
import useFilteredTodos from "../hooks/useFilteredTodos";

function TodoList() {
    const [todos, setTodos] = useState([
      { id: 1, text: 'Completare progetto React' },
      { id: 2, text: 'Completare esercizi' },
      { id: 3, text: 'Seguire le lezioni' },
      { id: 4, text: 'Perfezionarsi' },
      { id: 5, text: 'Organizzare chiamate' },
      { id: 6, text: 'Settare dei punti ' },
    ]);
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleSearchChange = useCallback((e) => {
        setSearchTerm(e.target.value);
      }, []);

      const inputRef = useRef(null);

    const filteredTodos = useFilteredTodos(todos, searchTerm);

    useEffect(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, []);
  
    return (
        <div>
        <input
          ref={inputRef}
          type="text"
          placeholder="Cerca un to-do..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <ul>
          {filteredTodos.map(todo => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default TodoList;
  