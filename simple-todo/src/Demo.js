import React from 'react';
import {createStore} from 'redux';

class Demo extends React.Component{
    render(){
                //step 2 - create reducer - action and state
                const reducer = function(state,action){
                    if(action.type === "TEST"){
                        return action.payload
                    }
                    else if(action.type === "TESTING"){
                        return action.payload;
                    }
                    return state;
                 }
        //Step 1:-create store - reducer n state
        const store = createStore(reducer,"peace");



         //step 3 subscribe
         store.subscribe(()=>{
             console.log("Store is now :", store.getState())
         })

         //step 4 dispatch action
         store.dispatch({type:"TEST",payload:"Just Test"});
         store.dispatch({type:"TESTING",payload:"Ing Info"})

        return(
            <div>
                test
            </div>
        )
    }
}
export default Demo;
