import React, { useEffect, useState } from "react";
import { TodoInput } from "./TodoInput";
import { AllTodos } from "./AllTodos";
import axios from "axios";

export const TodoApp = () => {
  const [todo, setTodo] = useState([]);

  const Getdata=()=>{
    axios.get("http://localhost:5400/todos").then((res)=>(console.log(res),setTodo(res.data))).catch((err)=>console.log(err))
  }

  useEffect(()=>{
    Getdata()
  },[])
  const AddData = (data) => {
    let payload = {
      id: Date.now(),
      title: data,
      status: false,
    };
    axios
      .post("http://localhost:5400/todos", payload)
      .then((res) =>{ console.log(res.data), Getdata()})
      .catch((err) => console.log(err));
     
  };
  const handleUpdate=(id,status)=>{
    axios.patch(`http://localhost:5400/todos/${id}`,{status:(!status)}).then((res)=>Getdata())
    

  }
  const handleDelete=(id)=>{
    axios.delete(`http://localhost:5400/todos/${id}`).then((res)=>Getdata()).catch((err)=>console.log(err))
  }
  return (
    <div>
      <h1>Todo App Using JSON</h1>
      <TodoInput AddData={AddData} />
      <AllTodos todo={todo}handleUpdate={handleUpdate} handleDelete={handleDelete}/>
    </div>
  );
};
