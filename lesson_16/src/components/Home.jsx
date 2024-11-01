import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const clickHome = () => {
    navigate('/About');
  };
  const clickPrincipal = () => {
    navigate('/');
  };


  return (
    <div>
      <h1>Benvenuto nella home</h1>

      <button onClick={clickHome}>Vai alla pagina About</button>
      <button onClick={clickPrincipal}>Vai alla Pagina Principale</button>
    </div>
  );
}

export default Home;