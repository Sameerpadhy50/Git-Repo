import React from "react";
import style from "../styles/navbar.module.css";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div id={style.navbar}>
      <div>
        <Link to="/">
          <h1>Navbar</h1>
        </Link>
      </div>
      <div id={style.second}>
        <ul>
        <Link to="/login1">
            <li>LoginRd</li>
          </Link>

          <Link to="/counter">
            <li>Counter</li>
          </Link>
          <Link to="/payment">
            <li>Payment</li>
          </Link>
          <Link to="/quotes">
            <li>Quotes</li>
          </Link>
          <Link to="/product">
            <li>Product</li>
          </Link>
          <Link to="/todo">
            <li>Todo</li>
          </Link>
          <Link to="/fire"><li>FireCalculator</li></Link>
          <Link to="/login">
            <li>Login</li>
          </Link>
          <Link to="/cart">
          <li>Cart</li></Link>
        </ul>
      </div>
    </div>
  );
};
