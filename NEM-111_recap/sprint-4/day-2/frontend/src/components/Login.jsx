import React, { useState } from "react";
import Style from "../Style/Signup.module.css"

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  

  const handleClick = () => {
    const payload = { email, pass};
    console.log(payload);
    fetch("http://localhost:4500/user/login",{
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {console.log(res);
      localStorage.setItem("token",res.token)})
      .catch((err) => console.log(err));
      setEmail('')
      setPass('')
      
  };

  return (
    <div className={Style.main}>
      <h1>Login</h1>
      <input
        type="text"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder="Enter mailId"
      />
      <br />
      <input
        type="text"
        value={pass}
        onChange={(e) => {
          setPass(e.target.value);
        }}
        placeholder="Enter Password"
      />
      <br />
      
      <br />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default Login;
