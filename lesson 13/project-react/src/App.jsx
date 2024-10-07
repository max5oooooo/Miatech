import { useState, useEffect } from "react";
import MyTitle from "./components/Mytitle";
import Button from "./components/Button";
import InputText from "./components/InputText";
import LoginForm from "./components/LoginForm";

function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleIncrement = () => {
    setCounter((counter) => {
      return counter + 1;
    })
  } 
   const handleDecrement = () => {
    setCounter((counter) => {
      return counter - 1;
    })
  } 
   const handleReset = () => {
    setCounter((counter) => {
      return counter = 0;
    })
  }
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
     event.preventDefault();
     alert(`Username: ${username} Password: ${password}`);
   };
  useEffect(() => {
    console.log('counter  aggiornato', counter)
  }, [counter]);
  return (
  <>    
    <MyTitle />
    <div>Counter : {counter}</div>
    <Button
     onIncrement={handleIncrement}
     onDecrement={handleDecrement}
     onReset={handleReset}
     />
     <div>
      <InputText
     value={inputValue}
     Change={handleChange}
     />
     </div>
     <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text"id="username" value={username}  
         onChange={(e) => setUsername(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  </>
  )
}

export default App
