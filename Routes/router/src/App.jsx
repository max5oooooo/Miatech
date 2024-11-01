import { Route, Routes } from "react-router-dom"
import TodoDetail from "./assets/components/TodoDetail"
import TodoList from "./assets/components/TodoList"

function App() {


  return (
    <>
      <Routes>
      <Route path="/" element={<TodoList />} />
      <Route path="/todo/:id" element={<TodoDetail />} />
    </Routes>
    </>
  )
}

export default App
