 
import './App.css'
import {Routes,Route} from "react-router-dom"
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { Todos } from './pages/Todos'
import { InputTodo } from './pages/InputTodo'
import { Signin } from './pages/Signin'
import { Todo } from './pages/Todo'
import { TodoEdit } from './pages/TodoEdit'

function App() {
 

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/todos" element={<Todos/>}></Route>
        <Route path='/add-todo' element={<InputTodo/>}></Route>
        <Route path="/todos/:id" element={<Todo/>}></Route>
        <Route path="/todo-edit/:id" element={<TodoEdit/>}></Route>
        <Route path="/signin" element={<Signin/>}></Route>
      </Routes>
    </div>
  )
}

export default App
