import { edittodo, fetchTodo } from "../Redux/todo/action"
import { useState } from "react"
import { useDispatch } from "react-redux/es/exports"
import { Navigate, useNavigate, useParams } from "react-router-dom"
export const TodoEdit=()=>{
    const navigate=useNavigate()
    const [temp,settemp]=useState("")
    const dispatch=useDispatch()
const {id}=useParams()
    return <div>
        <input onChange={(e)=>settemp(e.target.value)}type="text" placeholder="Edit to to" />
        <input type="submit" onClick={()=>dispatch(edittodo(id,{title:temp})).then(()=>navigate(-1))} />
    </div>
}