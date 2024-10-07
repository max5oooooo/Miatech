const LoginForm = ({ submit, user}) => {
    return (
      <>
 <form onSubmit={submit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text"id="username" value={user}  
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
  
  export default LoginForm