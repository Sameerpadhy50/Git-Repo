import React, { useState } from "react";
import Style from "../Style/Signup.module.css"

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [age, setAge] = useState("");

  const handleClick = () => {
    const payload = { email, pass, age };
    console.log(payload);
    fetch("http://localhost:4500/user/register",{
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
      setEmail('')
      setPass('')
      setAge("")
  };

  return (
    <div className={Style.main}>
      <h1>Registratin Form</h1>
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
      <input
        type="number"
        value={age}
        onChange={(e) => {
          setAge(e.target.value);
        }}
        placeholder="Enter Age"
      />
      <br />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default SignUp;
