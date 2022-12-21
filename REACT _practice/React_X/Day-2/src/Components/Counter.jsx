import { Button } from '@chakra-ui/react'
import React from 'react'

const Counter = () => {
    const[count ,setCount]=React.useState(0);
    const handleClick=(value) => {
        setCount(count +value)
    }
  return (
    <div>
      <h1>Counter:{count}</h1>
      <button onClick={ ()=>handleClick(+1)}>+</button>
      <button  disabled={count==0} onClick={ ()=>handleClick(-1)}>-</button>
    </div>
  )
}

export default Counter
