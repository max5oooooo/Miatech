import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const todo = ['Completare il progetto React', 'Fare la spesa', 'Andare in palestra'];
  const navigate = useNavigate();

  const clickHome = () => {
    navigate('/About');
  };
  const clickPrincipal = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>Lista dei To-Do</h1>
      <ul>
        {todo.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>

      <button onClick={clickHome}>Vai alla pagina About</button>
      <button onClick={clickPrincipal}>Vai alla Pagina Principale</button>
    </div>
  );
}

export default Home;