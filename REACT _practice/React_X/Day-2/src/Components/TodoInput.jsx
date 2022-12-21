import React from 'react'

export const TodoInput = ({addTodo}) => {
    const[text,setText]=React.useState("");
  return (
    <div>
        <input type="text"  value={text} onChange={(e)=>setText(e.target.value )}/>
        <button onClick={()=>addTodo(text)} >Add Todo</button>
        
    </div>
  )
}
