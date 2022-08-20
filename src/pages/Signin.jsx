import { useState } from "react";
import { authenticate } from "../Redux/Auth/action";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useNavigate } from "react-router-dom";
import { Input, Container, Stack } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
export const Signin=()=>{
    const [email,setEmail]=useState("eve.holt@reqres.in");
    const [password,setPassword]=useState("cityslicka")
    const token= useSelector((state)=>state.auth.token)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    // {
    //     "email": "eve.holt@reqres.in",
    //     "password": "cityslicka"
    // }
    const Signin=()=>{
        // console.log("hi")
        dispatch(authenticate({email,password}))
    }
  
    if(token){
      return <Navigate to="/todos"/>
    }
    return <Container pt="2rem">
       <Stack spacing={5}>
       <Input value={email} type="text" placeholder="email" onChange={(e)=>setEmail(e.target.value)} />
       <Input value={password} type="text" placeholder="password" onChange={(e)=>{setPassword(e.target.value)}}/>
       <Input type="submit" onClick={Signin}/>
       </Stack>
    </Container>
}