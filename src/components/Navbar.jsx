import {Link, useLocation} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { LOGOUT } from "../Redux/Auth/action"
import { Button, Container, HStack, Stack } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import "./navbar.css"
export const Navbar=()=>{
  const location= useLocation()
  const[active,setActive] =useState("/")
  const token= useSelector((state)=>state.auth.token)
  const   dispatch=useDispatch()
  useEffect(()=>{
    setActive(location.pathname)
     
  },[location])
    return <Container maxW="container.xl">
        <HStack spacing="auto" p="2rem">
        <Link className={active=="/"?"active":"notActive"}    to="/">Home</Link>
        <Link className={active=="/todos"? "active":"notActive"}    to="/todos">All Todos</Link>
        <Link className={active=="/add-todo"?"active":"notActive"}  to="/add-todo">Add new todo</Link>
        <Link className={active=="/signin"?"active":"notActive"}   to="/signin"> Sign in</Link>
       {token?<Button onClick={()=>{
            localStorage.clear()
           LOGOUT(dispatch)
        }}>  Logout</Button>:null}
        </HStack>
    </Container>
}