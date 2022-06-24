
import { useEffect } from "react"
import { useDispatch ,useSelector} from "react-redux/es/exports"
import { useNavigate } from "react-router-dom"
import { fetchTodo } from "../Redux/todo/action"
import { Navigate } from "react-router"
import {Link} from "react-router-dom"
export const Todos=()=>{
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const todo=useSelector((state)=>state.todo.todo)
    const isAuth=useSelector((state)=>state.auth.isAuth)
    const addedtodo=useSelector((state)=>state.todo.addedtodo)
    useEffect(()=>{
        dispatch(fetchTodo())
        return 
    },[addedtodo])
    // if(isAuth==false){
    //     alert("Login please")
    //     return <Navigate to="/signin"></Navigate>
    // }
    
    return <div>
        <h1> Your Todo List </h1>
        <div >{todo.map((el)=>(
       
            <div  key={el.id}style={{background:"green", width:"300px", textAlign:"center", margin:'auto', color:"white",cursor:"pointer" }}>
             <h3  style={{padding:".5rem"}}>{el.title}</h3>
             <Link  to={`/todos/${el.id}`}><button >Open</button></Link> 
             <Link  to={`/todo-edit/${el.id}`}><button>Edit</button></Link> 
           </div>
          
        ))} 
        </div>
       
    </div>
}