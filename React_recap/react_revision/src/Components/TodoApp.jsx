import React, { useState } from 'react'
import { Navbar } from './Navbar'
import { TodoInput } from './TodoInput'
import { AllTodos } from './AllTodos'

export const TodoApp = () => {
    const [navbar,setNavbar]=useState("Navbar TODO App")
    const [todo,setTodo]=useState([])

    const addTodo=(data)=>{
        const payload={
            title:data,
            id:Date.now(),
            status:false
        }
        setTodo([...todo,payload])
        console.log(todo)

    }
    const handleUpdate=(id)=>{
        const newTodo=todo.map((el)=>{if(el.id==id){
            return {...el,status:!el.status}
        }
    else{
        return el
    }})
    setTodo(newTodo)

    }
    const handleDelete=(id)=>{
        const newTodo=todo.filter((el)=>el.id!==id)
        setTodo(newTodo)
    }

  return (
    <div>
        <Navbar title={navbar}/>
        <TodoInput addTodo={addTodo}/>
        <AllTodos todo={todo} handleUpdate={handleUpdate} handleDelete={handleDelete}/>
    </div>
  )
}
