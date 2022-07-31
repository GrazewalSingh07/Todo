import axios from "axios"
import * as types from "./actionTypes"

export const todoRequest=()=>{
    return{
        type:types.FETCH_TODO_REQUEST
    }
}
export const todoSuccess=(payload)=>{
    return{
        type:types.FETCH_TODO_SUCCESS,
        payload
    }
}
export const todoFailure=()=>{
    return {
        type:types.FETCH_TODO_FAILURE
    }
}


export const fetchTodo=()=>(dispatch)=>{
    dispatch(todoRequest)
    return axios.get("http://localhost:8080/todos").then((res)=>{
        dispatch(todoSuccess(res.data))
         
    }).catch((err)=>{
        dispatch(todoFailure)
    })
}


export const addtodoRequest=()=>{
    return{
        type:types.ADD_FETCH_TODO_REQUEST
    }
}
export const addtodoSuccess=()=>{
    return{
        type:types.ADD_FETCH_TODO_SUCCESS,     
    }
}
export const addtodoFailure=()=>{
    return {
        type:types.ADD_FETCH_TODO_FAILURE
    }
}
export const addTodo=(data)=>(dispatch)=>{
    // dispatch(addtodoRequest)
    return axios.post("http://localhost:8080/todos",data).then((res)=>{
        dispatch(addtodoSuccess(res.data))
        dispatch(fetchTodo())
        console.log(res)
    }).catch((err)=>{
        // dispatch(addtodoFailure)
        console.log(err)
    })
}
export const edittodo=(id,data)=>(dispatch)=>{
    
    return axios.patch(`http://localhost:8080/todos/${id}`,data).then((res)=>{
       
        dispatch(fetchTodo())
        
    }).catch((err)=>{
        
        console.log(err)
    })
}
export const deletetodo=(id)=>(dispatch)=>{
    
    return axios.delete(`http://localhost:8080/todos/${id}`).then((res)=>{
       
        dispatch(fetchTodo())
        
        
    }).catch((err)=>{
        // dispatch(addtodoFailure)
        console.log(err)
    })
}