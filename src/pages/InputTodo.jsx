import { useDispatch } from "react-redux/es/hooks/useDispatch"
import { useState } from "react"
import { addTodo, fetchTodo } from "../Redux/todo/action"
import { useSelector } from "react-redux"
import { Navigate } from "react-router"
import { Container, Input, Stack } from "@chakra-ui/react"
export const InputTodo=()=>{

    const dispatch=useDispatch()
    const [temptodo,settemptodo]=useState("")
    const isAuth=useSelector((state)=>state.auth.token)
    const PostaddTodo=()=>{
        dispatch(addTodo({title:temptodo,status:false}))
         
    }
    if(isAuth==null){
        alert("Login please")
        return <Navigate to="/signin"></Navigate>
    }
    
    return <Container>
      <Stack>
        <Input type="text" value={temptodo} placeholder=" what is next" onChange={(e)=>settemptodo(e.target.value)}/>
        <Input type="submit" onClick={PostaddTodo}  />
      </Stack>
    </Container>
}