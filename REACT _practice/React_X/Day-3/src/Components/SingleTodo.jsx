import React from 'react'

export const SingleTodo = ({id,status,title,handleUpdate ,handleTodoDelete}) => {
  return (
    <div style={{display:"flex"}}>
        <h3>{title}</h3>

        
        <button onClick={()=>handleUpdate(id,status)}>{status ? "Done" :"Not Done"}</button>
        <button onClick={()=>handleTodoDelete(id)} >Delete</button>
    </div>
  )
}
