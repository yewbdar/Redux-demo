const BUY_CAKE='BUY_CAKE'


   
function buyCake(){
    return{
        type:BUY_CAKE,
        info:'this is the action'
    }
}
//(instioanState , Action) => newState

const instialState={
    numOfCake:10
}

const reducer=(state=instialState, action)=>{
     switch(action.type){
         case BUY_CAKE :
             return{
                 ...state, numOfCake: state.numOfCake - 1
             }
             default : return state; 
     }
     
}