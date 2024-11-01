// src/TodoContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';

// Crea il contesto
const TodoContext = createContext();

// Crea il provider
 const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
       
        const fetchTodos = async () => {
            const response = await fetch('https://dummyjson.com/todos'); // Percorso del file JSON
            const data = await response.json();
            setTodos(data.todos);
        };

        fetchTodos();
    }, []);

    // Funzione per aggiungere un to-do
    const addTodo = (todo) => {
        setTodos(prevTodos => [...prevTodos, todo]);
    };

    // Funzione per rimuovere un to-do
    const removeTodo = (id) => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    };

    return (
        <TodoContext.Provider value={{ todos, addTodo, removeTodo }}>
            {children}
        </TodoContext.Provider>
    );
};

// Hook per utilizzare il contesto
export const useTodos = () => {
    return useContext(TodoContext);
};


export default TodoProvider