import TodoList from "./components/TodoList"
import  TodoProvider  from "./context/TodoContext"



function App() {

  return (
    <>
        <TodoProvider>
            <div>
                <h1>My Todo List</h1>
                <TodoList />
            </div>
        </TodoProvider>
    </>
  )
}

export default App
