
import { useState } from "react"
import { useEffect } from "react"
import { useDispatch ,useSelector} from "react-redux/es/exports"
 import {useParams} from "react-router"
import { deletetodo, edittodo, fetchTodo } from "../Redux/todo/action"
 import {useNavigate} from "react-router-dom"
export const Todo=()=>{
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const [curr,setcurr]=useState(null)
    const todo=useSelector((state)=>state.todo.todo)
    
    const {id}=useParams()
    useEffect(()=>{
       let temp= todo.find((el)=>el.id==id)
        setcurr(temp)
    },[todo])

    function patchTodo(){
        setcurr({...curr},curr.status=(!curr.status))
        
        dispatch(edittodo(curr.id,curr)).then(()=>{
            dispatch(fetchTodo())
        })
    }
    function remove(){
       
        dispatch(deletetodo(curr.id)).then(()=>{
            dispatch(fetchTodo())
            navigate("/todos")
        })
    }
    return <div>
        <h1>Title: {curr?.title} </h1>
         <h2 style={{cursor:"pointer"}} onClick={patchTodo}>Status: {curr?.status==true?"Done":"Not Done"}</h2>
       <button onClick={remove}>Delete</button>
    </div>
}