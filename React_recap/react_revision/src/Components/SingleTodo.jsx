import React from "react";

export const SingleTodo = ({ id,title, status,handleUpdate,handleDelete}) => {
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={()=>handleUpdate(id)}>{status?"Done":"Not Done"}</button>
      <button onClick={()=>handleDelete(id)}>Delete</button>
    </div>
  );
};
