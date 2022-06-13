import {Link} from "react-router-dom"

export const Navbar=()=>{
    return <div style={{margin:"1rem"}}>
        <Link style={{margin:"1rem"}} to="/">Home</Link>
        <Link style={{margin:"1rem"}} to="/todos">All Todos</Link>
        <Link  style={{margin:"1rem"}}to="/add-todo">Add new todo</Link>
        <Link  style={{margin:"1rem"}}to="/signin"> Sign in</Link>
    </div>
}