import axios from "axios";
import React, { useEffect, useState } from "react";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  const getData=()=>{
    fetch("http://localhost:4500/notes", {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setNotes(res);
      })
      .catch((err) => console.log(err));

  }

  useEffect(() => {
    getData()
    
  }, []);
  const handleDelete=(id)=>{
    fetch(`http://localhost:4500/notes/delete/${id}`,{
      method:"DELETE"
    })
    getData()
  }
  return (
    <div>
      <u><h1>Notes</h1></u>
      {notes.length > 0 ? (
        notes.map((el) => <div key={el._id}>
          <h1>{el.title}</h1>
          <h4><i>{el.sub}</i></h4>
          <p>{el.body}</p>
          <button onClick={()=>handleDelete(el._id)}>Delete</button>
        </div>)
      ) : (
        <div>
          <h1>Nothing in the Notes</h1>
        </div>
      )}
    </div>
  );
};

export default Notes;
