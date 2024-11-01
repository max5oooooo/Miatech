import React from 'react';
import { useParams } from 'react-router-dom';

const todos = [
  { id: 1, title: 'Learn React', description: 'Study React.js documentation.' },
  { id: 2, title: 'Learn Redux', description: 'Understand state management.' },
  { id: 3, title: 'Build a Todo App', description: 'Create a full-stack Todo application.' },
];

const TodoDetail = () => {
  const { id } = useParams();
  const todo = todos.find(todo => todo.id === parseInt(id));

  if (!todo) {
    return <h2>Todo not found</h2>;
  }

  return (
    <div>
      <h2>{todo.title}</h2>
      <p>{todo.description}</p>
    </div>
  );
};

export default TodoDetail;
