import React from 'react'
import { SingleTodo } from './SingleTodo'

export const AllTodo = ({todos ,handleUpdate ,handleTodoDelete}) => {
  return (
    <div>
        {todos.map((todo)=><SingleTodo {...todo } handleUpdate={handleUpdate} handleTodoDelete={handleTodoDelete}/>)}
        </div>
  )
}
