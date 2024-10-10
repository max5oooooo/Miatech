import { useState } from 'react'

const App = () => {
  const[form, setForm] = useState({
    name:"",
    surname:"",
    email:"",
    password:"",
    number:"",
  })

  const handleInput = (e) =>{
    const {name, value} = e.target;
    setForm((form) => {
      return {
        ...form,
        [name]: value,
      }
    })
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(form)
  }
  return (
    <>
    <div class="flex justify-center">
    <form className="bg-white shadow-xl border rounded px-8 pt-6 pb-8 mb-4 w-full max-w-xs mt-5 " onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline mt-2 mb-3" name="name" type="text" id="name" onInput={handleInput}  value={form.name} required/>
      </div>
      <div>
        <label htmlFor="surname">Surname:</label>
        <input className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline mt-2 mb-3" name="surname" type="text" id="surname" onInput={handleInput} value={form.surname} required/>
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input className="shadow appearance-none border rounded  py-2 px-4 text-gray-700 leading-tight focus:outline focus:shadow-outline mt-2 mb-3" name="email" type="email" id="email" onInput={handleInput} value={form.email} required/>
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline mt-2 mb-3" name="password" type="password" id="password" onInput={handleInput} value={form.password} required/>
      </div>
      <div>
        <label htmlFor="tel">Number:</label>
        <input className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline mt-2" name="number" type="tel" id="tel" onInput={handleInput} value={form.number} required/>
      </div>
      <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mt-3 mb-2 hover:bg-sky-200 active:bg-sky-500" type="submit">Login</button>
    </form>
    </div>
    </>
  )
}

export default App
