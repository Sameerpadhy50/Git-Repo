import React, { useContext } from 'react'
import style from "../styles/LoginRed.module.css"
import { AppContextwithReducer } from '../Context/AppContextwithReducer'
import { handleInputOnChange, handleLogin } from '../Reducer/actionCreator'
import { LOGIN_FAIL, LOGOUT_REQ } from '../Reducer/action'
import LoadingBoy from '../Day-2/LoadingBoy'


export const LoginRed = () => {

  const[state,dispatch]=useContext(AppContextwithReducer)

  if(state.isLoading){
    return(
      <LoadingBoy/>
    )
  }
    if(state.isAuth){
      return(
        <div>

          <h1>token-{state.token}</h1>
          <button onClick={()=>dispatch({type:LOGOUT_REQ})} >LogOut</button>
        </div>
      )
    }
  return (
    <div id={style.parent}>
        <h1>Login Using useReducer</h1>
        <div id={style.main}>
            <input type="text" value={state.email}  onChange={(e)=>dispatch(handleInputOnChange("email",e.target.value))}placeholder='Enter email ' />
            <input type="text" value={state.password} onChange={(e)=>dispatch(handleInputOnChange("password",e.target.value))} placeholder='Enter  password'/>
            <button onClick={()=>handleLogin([state,dispatch])}>Login</button>
            
        </div>
    </div>
  )
}
