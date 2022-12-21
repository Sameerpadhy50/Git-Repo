import React from "react";
import style from "../styles/Payment.module.css"

export const Payment = () => {
  
  return (
    <div className={style.payment_div}>
      <form action="">
        <input type="text" placeholder="Name"/>
        <br/><br/>
        <input type="text"placeholder="Address" />
        <br/><br/>
        <input type="text" placeholder="Card No"/>
        <br/><br/>
        <input type="<text>" placeholder="CVV Number"/>
        <br/><br/>
        <input type="submit"  />
      </form>
    </div>
  );
};
