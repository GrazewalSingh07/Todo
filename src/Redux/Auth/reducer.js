import { loadData } from "../../utils/localStorage"
import * as types from "./actionTypes"

 
const initState={
   
   token:loadData("key")||null,
//    isAuth:this.token?true:false,
   error:null

}

export const authReducer=(state=initState,{type,payload})=>{
    switch(type){
        case types.AUTH_SUCCESS:{
            return{
                ...state,
                isAuth:true,
                token:payload

            }
        }
        case types.AUTH_FAILURE:{
            return{
                ...state,
                error:payload
            }
        }
        default:{
            return state
        }
    }
}