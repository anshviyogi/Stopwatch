import {types} from '../actions/actionTypes'

const initialState = {
    data : []
}

const reducer = (state = initialState,{type,payload})=>{
    switch(type){
        case types.splitData:
            // All the previous data(...) and the new data
            return {...state,data:payload};
        default:
            return state;
    }
}

// We could have also used {combine reducers} if we had more than one reducer.

export default reducer;