import { types } from "./actionTypes"

const splitAction = (data)=>{
    return{
        type:types.splitData,
        payload:data
    }
}

export default splitAction