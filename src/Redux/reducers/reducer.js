import {types} from '../actions/actionTypes'

const initialState = {
    data : []
}

const reducer = (state = initialState,{type,payload})=>{
    switch(type){
        case types.splitData:
            return {...state,data:payload};
        default:
            return state;
    }
}

// We could have also used {combine reducers} if we had more than one reducer.

export default reducer;