import React, { useState } from "react";
import axios from "axios";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState(false);
  const[token,setToken]=useState('')
  const [loading,setLoading]=useState(false)

  const handleLogin = () => {
    setLoading(true)
    let payload = {
      email: email,
      password: password,
    };
    if (!email || !password) {
      alert("Please enter the Field");
      return;
    }

    axios
      .post("https://reqres.in/api/login", payload)
      .then((res) => {
        setAuth(true)
        console.log(res.data);
        setToken(res.data.token)
        setLoading(false)
      })
      .catch((err) => {
        alert("Invalid Data");
        window.location.reload()
      });
  };
  const handleLogout=()=>{
    setAuth(false)
  }
  if(auth){
    return (
        <div>
            <h1>Token:{token}</h1>
            <button onClick= {handleLogout}>Logout</button>
        </div>
        
    )
  }
  if(loading){
    return <div>
        <img src="https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="" />
    </div>
  }

  return (
    <div>
      <h1>Login</h1>
      <hr />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
