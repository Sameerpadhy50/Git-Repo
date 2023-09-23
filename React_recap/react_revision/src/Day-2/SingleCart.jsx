import React from "react";
import style from "../styles/SingleCart.module.css"
import { useNavigate } from "react-router-dom";


export const SingleCart = ({
  id,
  title,
  description,
  price,
  brand,
  category,
  thumbnail,
  images,
}) => {
  const navigate=useNavigate()
  return (
    <div id={style.SingleCart} onClick={()=>navigate(`/product/${id}`)} >
      <div >
        <img src={thumbnail} alt="" />
      </div>
      <div >
        <h3>{title}</h3>
        <h6>{brand}</h6>
         <p>{category}</p>
        {/* <p>{description}</p> */}
        <p>Price:-{price}₹</p>
      </div>
      
      <br />
      
    </div>
  );
};
