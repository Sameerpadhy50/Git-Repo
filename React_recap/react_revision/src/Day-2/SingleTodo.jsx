import React from 'react'

export const SingleTodo = ({id,title,status,handleUpdate,handleDelete}) => {
  return (
    <div>
        <h4>{title}</h4>
        <button onClick={()=>{handleUpdate(id,status)}}>{status?"Done":"NotDone"}</button>
        <button onClick={()=>handleDelete(id)}>Delete</button>
    </div>
  )
}
