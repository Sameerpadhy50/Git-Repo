import React, { useReducer } from 'react'

const reducer=(state,action)=>{
    switch(action.type){
        case "ADD_COUNT":
            return {...state,counter:state.counter+1};
            case "REDUCE_COUNT":
                return {...state,counter:state.counter+1};
                 default:
                    return state
        }
    }


const store={
    counter:0
}

export const Counter = () => {
  
    const [state,dispatch]=useReducer(reducer,store)
  return (
    <div>
        <h4>Counts-{state.counter}</h4>
        <button onClick={()=>{dispatch({type:"ADD_COUNT"})}}>Add Count</button>
        <button onClick={()=>{dispatch({type:"REDUCE_COUNT"})}}>Reduce Count</button>
    </div>
  )
}
