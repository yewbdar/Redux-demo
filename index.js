const redux = require('redux')
const createStore=redux.createStore
const combinedReducer=redux.combineReducers
const BUY_CAKE='BUY_CAKE'
const BUY_ICECRAM='BUY_ICECRAM'


   
function buyCake(){
    return{
        type:BUY_CAKE,
        info:'this is the action'
    }
}
function buyIcecream(){
    return{
        type:BUY_ICECRAM,
        info:'this is the action'
    }
}
//(instioanState , Action) => newState

const initialCakeState={
    numOfCake:10
}
const initialIcecreamState={
    numOfIcecream:20
}
const cakeReducer = (state=initialCakeState, action)=>{
     switch(action.type){
         case BUY_CAKE :
             return{
                 ...state, numOfCake: state.numOfCake - 1
             }
             default : return state; 
     }
     
}
const iceCreamReducer = (state=initialIcecreamState, action)=>{
    switch(action.type){
        case BUY_ICECRAM :
            return{
                ...state, numOfIcecream: state.numOfIcecream - 1
            }
            default : return state; 
    }
    
}
const rootReducer = combinedReducer(
    {
    cake:cakeReducer,
    icecream:iceCreamReducer
})
const store = createStore(rootReducer)
console.log('inital state', store.getState())
 const unsubscribe = store.subscribe(() => console.log("update state",store.getState()))
 store.dispatch(buyCake())
 store.dispatch(buyCake())
 store.dispatch(buyCake())
 store.dispatch(buyIcecream())
 store.dispatch(buyIcecream())
 unsubscribe()