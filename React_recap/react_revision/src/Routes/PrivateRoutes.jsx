import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AppContext } from '../Context/AppContextProvider'
import { AppContextwithReducer } from '../Context/AppContextwithReducer'

export const PrivateRoutes = ({children}) => {
  const [state,dispatch]=useContext(AppContextwithReducer)
  if(!state.isAuth){
    return <Navigate to="/login1"/>
  }
  return children
  
}
