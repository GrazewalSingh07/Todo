import * as types from "./actionTypes"
import axios from "axios"
import { saveData } from "../../utils/localStorage"
export const authRequest=()=>{
    return{
        type:types.AUTH_REQUEST
    }
}
export const authSuccess=(payload)=>{
    return{
        type:types.AUTH_SUCCESS,
        payload
    }
}
export const authFailure=(payload)=>{
    return{
        type:types.AUTH_FAILURE,
        payload
    }
}
export const authenticate=(data)=>(dispatch)=>{
    // console.log(data)
    dispatch(authRequest)
    return axios.post("https://reqres.in/api/login",data
    ).then((res)=>{
        dispatch(authSuccess(res.data.token))
        saveData(res.data.token)
        console.log(res.data)
    }).catch((err)=>{
        dispatch(authFailure(err.data))
        console.log(err)
    })
}