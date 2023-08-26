import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AppContext } from '../Context/AppContextProvider'

export const PrivateRoutes = ({children}) => {
    const {auth}=useContext(AppContext)
  if(!auth){
    return <Navigate to="/login"/>
  }
  return children
  
}
