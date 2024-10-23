import React from 'react';
import { useNavigate } from 'react-router-dom';

function About() {
    const navigate = useNavigate();

  const clickHome = () => {
    navigate('/Home');
  };
  const clickPrincipal = () => {
    navigate('/');
  };
  return (
    <div>
      <h1>Informazioni sull'Applicazione</h1>
      <p>Questa è una semplice applicazione React che dimostra l'utilizzo di react-router-dom.</p>
      <button onClick={clickHome}>Vai alla Home</button>
      <button onClick={clickPrincipal}>Vai alla Pagina Principale</button>
    </div>
  );
}

export default About;