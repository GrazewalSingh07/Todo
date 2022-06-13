import { useDispatch } from "react-redux/es/hooks/useDispatch"
import { useState } from "react"
import { addTodo, fetchTodo } from "../Redux/todo/action"
export const InputTodo=()=>{

    const dispatch=useDispatch()
    const [temptodo,settemptodo]=useState("")

    const PostaddTodo=()=>{
        dispatch(addTodo({title:temptodo,status:false})).then((result) => {
            dispatch(fetchTodo)
        }) 
         
    }
    return <div>
       <input type="text" value={temptodo} placeholder=" what is next" onChange={(e)=>settemptodo(e.target.value)}/>
       <input type="submit" onClick={PostaddTodo}  />
    </div>
}