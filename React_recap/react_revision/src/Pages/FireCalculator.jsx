import React, { useReducer } from "react";
import style from "../styles/FireCalculator.module.css";
import store from "../Reducer/store";
import reducer from "../Reducer/reducer";
import { handleCalculatorOnclick, handleInputOnChange } from "../Reducer/actionCreator";

export const FireCalculator = () => {
  const [state,dispatch]=useReducer(reducer,store)
  return (
    <div id={style.main}>
      <h1>How much Money You need in Future</h1>
      <div id={style.content}>
        <div className={style.left}>
          <input type="text" value={state.curExp} onChange={(e)=>dispatch(handleInputOnChange("curExp",e.target.value))} placeholder="Monthly Expenses Today" />
          <input type="text" value={state.curAge} onChange={(e)=>dispatch(handleInputOnChange("curAge",e.target.value))} placeholder="Current Age" />
          <input type="text" value={state.retAge} onChange={(e)=>dispatch(handleInputOnChange("retAge",e.target.value))} placeholder="Retirement Age" />
          <input type="text" value={state.infliation} onChange={(e)=>dispatch(handleInputOnChange("infliation",e.target.value))} placeholder="Infliation in %" />
          <button onClick={()=>dispatch(handleCalculatorOnclick(state))}>Calculate FIRE</button>
        </div>
        <div className={style.right}>
          <h3>Yearly Expanses(As of Today)-{state.resYearlyExpToday}</h3>
          <h3>Yearly Expanses(As of Retirement)-{state.resYearlyExpRet}</h3>
          <h3>Your FIRE Number-{state.resFireNumber}</h3>
        </div>
      </div>
    </div>
  );
};
