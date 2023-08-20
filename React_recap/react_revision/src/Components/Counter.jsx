import React, { useState } from 'react'
import "../styles/Counter.css"

export const Counter = () => {
  const [counter,setCounter]=useState(0)
const handleClick=(value)=>{
  setCounter(counter+value)
}
  return (
    <div >
      <div id='counter' >

      <h1>{counter}</h1>
      <button onClick={()=>handleClick(1)}>+</button>
      <button disabled={counter<=0} onClick={()=>handleClick(-1)}>-</button>
      </div>
      
    </div>
  )
}
