import { useState } from "react";
import { authenticate } from "../Redux/Auth/action";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useNavigate } from "react-router-dom";
export const Signin=()=>{
    const [email,setEmail]=useState("eve.holt@reqres.in");
    const [password,setPassword]=useState("cityslicka")
    const dispatch=useDispatch()
    const navigate=useNavigate()
    // {
    //     "email": "eve.holt@reqres.in",
    //     "password": "cityslicka"
    // }
    const Signin=()=>{
        // console.log("hi")
        dispatch(authenticate({email,password})).then(()=>{
            navigate(-1)
        })
    }
    return <div>
       <input value={email} type="text" placeholder="email" onChange={(e)=>setEmail(e.target.value)} />
       <input value={password} type="text" placeholder="password" onChange={(e)=>{setPassword(e.target.value)}}/>
       <input type="submit" onClick={Signin}/>
    </div>
}