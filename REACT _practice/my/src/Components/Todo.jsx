import React from "react";



function Todo(){
    const[count,setCount]=React.useState(0);
    const [text, setText]=React.useState("");
    const[todo ,setTodo]=React.useState([])
    const handleclick= ()=>{
        let newtodo ={
            id:Math.random(),
            title:text
        } 
         setTodo([...todo,newtodo]);
         setText("");
         console.log(todo);
    };
    return(
        <div>
            <h1>todos:{count}</h1>
            <button onClick={()=>{setCount(count+1)}}>Add</button>
            <button onClick={()=>{setCount(0)}}>Reset</button>
            <button  onClick={()=>{setCount(count-1)}}>Reduce</button>
            <br />
            <br /><br /><br /><br /><br />
            <hr />
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="add todo" />
          
            <button onClick={handleclick}>Submit</button>
            <ol>
                {
                    todo.map((todo)=>(
                    <li key={todo.id}>{todo.title}</li>
                    ))}
            </ol>
        </div>
    )
}
export default Todo;