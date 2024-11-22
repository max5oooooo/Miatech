import React, { Component } from 'react';

// Componente HelloWorld come classe
class HelloWorld extends Component {
  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
      </div>
    );
  }
}

// Componente App che esegue il rendering di HelloWorld
class App extends Component {
  render() {
    return (
      <div>
        <HelloWorld />  {/* Rendering del componente HelloWorld */}
      </div>
    );
  }
}

export default App;