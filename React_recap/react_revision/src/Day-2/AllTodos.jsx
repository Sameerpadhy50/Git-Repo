import React from 'react'
import { SingleTodo } from './SingleTodo'

export const AllTodos = ({todo,handleUpdate,handleDelete}) => {
  return (
    <div>{todo?.map((el)=><SingleTodo key={el.id}{...el} handleUpdate={handleUpdate} handleDelete={handleDelete}/>)}</div>
  )
}
