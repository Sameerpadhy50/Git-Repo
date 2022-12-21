import React from 'react'
import { AllTodo } from './AllTodo'
import { Navbar } from './Navbar'
import { useEffect } from 'react'
import { TodoInput } from './TodoInput'
import axios from 'axios'
export const TodoApp = () => {
    const [todos,setTodo]=React.useState(null); 

    useEffect(() =>{
        getData()
        
    },[])
    const getData=()=>{
        axios.get("http://localhost:3030/todos").then((res)=>
            
        setTodo(res.data),
        //console.log(res.data)
        )
    }

    const addTodo=(data) => {
        alert(data)
        const payload={
            title: data,
            status:false,
            id:Date.now()
        }

        // setTodo([...todos, payload]) 

        axios.post("http://localhost:3030/todos",payload).then((res)=>{
            alert("data added")
            getData()
        }).catch((err)=>{
            alert("wrong data")
        })
        
    }
    const handleUpdate =(id,status)=>{
        axios.patch(`http://localhost:3030/todos/${id}`,{status:!status}).then((res)=>{
            alert("data updated");
            getData()

        })
    }
    const handleTodoDelete =(id)=>{
        axios.delete(`http://localhost:3030/todos/${id}`).then((res)=>{
            alert("data deleted")
        })
        getData()
    }
  return (
    <div>
        <Navbar title={"Todo App Navbar"}/>
        
        <TodoInput addTodo={addTodo} />
        
        <AllTodo  todos={todos} handleUpdate={handleUpdate} handleTodoDelete={handleTodoDelete}/>
    </div>
  )
}
