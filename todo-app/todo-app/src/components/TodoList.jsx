// src/TodoList.js
import React from 'react';
import { useTodos } from '../context/TodoContext';


const TodoList = () => {
    const { todos, removeTodo } = useTodos();

    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    {todo.todo}
                    <button onClick={() => removeTodo(todo.id)}>Rimuovi</button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
