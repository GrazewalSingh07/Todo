import { useState } from "react";
import { authenticate } from "../Redux/Auth/action";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
export const Signin=()=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")
    const dispatch=useDispatch()
    const Signin=()=>{
        // console.log("hi")
        dispatch(authenticate({email,password}))
    }
    return <div>
       <input value={email} type="text" placeholder="email" onChange={(e)=>setEmail(e.target.value)} />
       <input value={password} type="text" placeholder="password" onChange={(e)=>{setPassword(e.target.value)}}/>
       <input type="submit" onClick={Signin}/>
    </div>
}