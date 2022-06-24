import { useDispatch } from "react-redux/es/hooks/useDispatch"
import { useState } from "react"
import { addTodo, fetchTodo } from "../Redux/todo/action"
import { useSelector } from "react-redux"
import { Navigate } from "react-router"
export const InputTodo=()=>{

    const dispatch=useDispatch()
    const [temptodo,settemptodo]=useState("")
    const isAuth=useSelector((state)=>state.auth.token)
    const PostaddTodo=()=>{
        dispatch(addTodo({title:temptodo,status:false})).then((result) => {
            dispatch(fetchTodo)
        }) 
         
    }
    if(isAuth==null){
        alert("Login please")
        return <Navigate to="/signin"></Navigate>
    }
    
    return <div>
       <input type="text" value={temptodo} placeholder=" what is next" onChange={(e)=>settemptodo(e.target.value)}/>
       <input type="submit" onClick={PostaddTodo}  />
    </div>
}