import React from 'react'
import { AllTodo } from './AllTodo'
import { Navbar } from './Navbar'
import { TodoInput } from './TodoInput'

export const TodoApp = () => {
    const [todos,setTodo]=React.useState([]); 

    const addTodo=(data) => {
        alert(data)
        const payload={
            title: data,
            status:false,
            id:Date.now()
        }

        setTodo([...todos, payload])
        
        
    }
    const handleUpdate =(id)=>{
        const newTodo =todos.map((todo)=>{
            if(todo.id===id){
                return {...todo,status:!todo.status}
            }
            else{
                return todo;
            }
        })
        setTodo(newTodo);
    }
    const handleTodoDelete =(id)=>{
        const newTodos= todos.filter((todo)=>todo.id !==id);
        setTodo(newTodos);

    }
  return (
    <div>
        <Navbar title={"Todo App Navbar"}/>
        
        <TodoInput addTodo={addTodo} />
        
        <AllTodo  todos={todos} handleUpdate={handleUpdate} handleTodoDelete={handleTodoDelete}/>
    </div>
  )
}
