import React, { useState } from 'react'

export const TodoInput = ({AddData}) => {
    const [text,setText]=useState("")
  return (
    <div>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
        <button onClick={()=>AddData(text)}>AddTodo</button>
    </div>
  )
}
