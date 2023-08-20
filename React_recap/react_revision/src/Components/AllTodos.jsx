import React from 'react'
import { SingleTodo } from './SingleTodo'

export const AllTodos = ({todo,handleUpdate,handleDelete}) => {
  return (
    <div>{todo.map((el) =><SingleTodo {...el}handleUpdate={handleUpdate} handleDelete={handleDelete}/>)}</div>
  )
}
