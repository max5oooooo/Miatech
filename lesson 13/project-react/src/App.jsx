import { useState, useEffect } from "react";
import MyTitle from "./components/Mytitle";
import Button from "./components/Button";
import InputText from "./components/InputText";
import LoginForm from "./components/LoginForm";
import ItemList from "./components/ItemList";
import Card from "./components/Card";

function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const itemL = [`item1`, `item2`, `item3`, `item4`,]
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

   const uncontrolledInput = (e) =>{
    e.preventDefault();
    const form = new FormData(e.target);
    const data = Object.fromEntries(form);
    console.log(data)
   }


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
     
     <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-xs" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="username" value={username}  
         onChange={(e) => setUsername(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" id="password" value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mt-3 mb-2 hover:bg-sky-200 active:bg-sky-700" type="submit">Login</button>
    </form>
     

    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-xs" onSubmit={uncontrolledInput}>
      <div>
        <label htmlFor="username">Username:</label>
        <input className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-2 mb-2" type="text" name="username" />
      </div>
      <div>
      <label htmlFor="last_name">last_name:</label>
      <input className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-2 " type="text" name="last_name" />
      </div>
      <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mt-3 mb-2 hover:bg-sky-200 active:bg-sky-700" type="submit">Send</button>
    </form>

    <ItemList
    items={itemL}/>

    <div>
      <Card>
        <h2>Titolo della carta</h2>
        <p>Paragrafo della carta</p>
      </Card>
    </div>
  </>
  )
}

export default App
