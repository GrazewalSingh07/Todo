 
import './App.css'
import {Routes,Route} from "react-router-dom"
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { Todo } from './pages/Todo'
import { InputTodo } from './pages/InputTodo'
import { Signin } from './pages/Signin'

function App() {
 

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/todos" element={<Todo/>}></Route>
        <Route path='/add-todo' element={<InputTodo/>}></Route>
        <Route path="/signin" element={<Signin/>}></Route>
      </Routes>
    </div>
  )
}

export default App
