import {Link} from "react-router-dom"
import { useDispatch } from "react-redux"
import { LOGOUT } from "../Redux/Auth/action"
export const Navbar=()=>{
  const   dispatch=useDispatch()
    return <div style={{margin:"1rem"}}>
        <Link style={{margin:"1rem"}} to="/">Home</Link>
        <Link style={{margin:"1rem"}} to="/todos">All Todos</Link>
        <Link  style={{margin:"1rem"}}to="/add-todo">Add new todo</Link>
        <Link  style={{margin:"1rem"}}to="/signin"> Sign in</Link>
        <button onClick={()=>{
            localStorage.clear()
           LOGOUT(dispatch)
        }}>  Logout</button>
    </div>
}