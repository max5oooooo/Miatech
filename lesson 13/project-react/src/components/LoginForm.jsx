const LoginForm = ({ submit, user, password ,onPassword ,onUsername}) => {
    return (
      <>
<form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-xs" onSubmit={submit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="username" value={user}  
         onChange={(e) => onUsername(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" id="password" value={password}
          onChange={(e) => onPassword(e.target.value)}
        />
      </div>
      <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mt-3 mb-2 hover:bg-sky-200 active:bg-sky-700" type="submit">Login</button>
    </form>
      </>
    )
  }
  
  export default LoginForm