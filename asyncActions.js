const redux = require('redux')
const createStore=redux.createStore
const FETCH_USER_REQUEST='FETCH_USER_REQUEST';
const FETCH_USER_SUCCESS='FETCH_USER_SUCCESS'
const FETCH_USER_FAILURE='FETCH_USER_FAILURE'


const initialState={
    isLoding:false,
    user:[],
    error:''
}

function feachUserRequest(){
    return{
        type:FETCH_USER_REQUEST
    }
}
function feachUserSuccess(user){
    return{
        type:FETCH_USER_SUCCESS,
        payload:user
    }
}
function feachUserFailure(){
    return{
        type:FETCH_USER_FAILURE
    }
}

const request =( state=initialState , action)=>{
       switch(action.type){
         case FETCH_USER_REQUEST :{
             return{
                 ...state,
                 isLoding:true
             }
         }
         case FETCH_USER_SUCCESS :{
            return{
                ...state,
                isLoding:failure,
                user:action.payload,
                error:""
            }
        }
        case FETCH_USER_FAILURE :{
            return{
                ...state,
                isLoding:false,
                user:[],
                error:action.payload
            }
        }
        default: return state
       }
}


const store = createStore(request)