import axios from "axios";
import React, { useContext, useState } from "react";
import { AppContext } from "../Context/AppContextProvider";

export const Login = () => {
  const { auth, token, login, logout } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please Provide Both the Credential");
      return;
    }
    const payload = {
      email,
      password,
    };
    axios
      .post("https://reqres.in/api/login", payload)
      .then((res) => (alert("login Done"), login(res.data.token)))
      .catch((err) => console.log(err));
  };
  const handleLogout = () => {
    logout();
  };
  if (auth) {
    return (
      <div>
        <h1>The Token is-{token}</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }
  return (
    <div style={{ textAlign: "center", alignItems: "center" }}>
      <h1>Login Form</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPass(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
