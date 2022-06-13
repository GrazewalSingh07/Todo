
import { useEffect } from "react"
import { useDispatch ,useSelector} from "react-redux/es/exports"
import { fetchTodo } from "../Redux/todo/action"

export const Todo=()=>{
    const dispatch=useDispatch()
    const todo=useSelector((state)=>state.todo.todo)
    const addedtodo=useSelector((state)=>state.todo.addedtodo)
    useEffect(()=>{
        dispatch(fetchTodo())
    },[addedtodo])
    
    return <div>
        <h1> Your Todo List </h1>
        <div>{todo.map((el)=>(
           <div key={el.id}>
             <h3>{el.title}</h3>
           </div>
        ))}</div>
    </div>
}