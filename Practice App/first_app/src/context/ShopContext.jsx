import React, { createContext,useState } from 'react'
import { PRODUCTS } from '../product';

export const ShopContext= createContext(null);

const getDefaultCart=()=>{
    const cart={}
    for(let i=1;i<=PRODUCTS.length;i++){
        cart[i]=0
    }
    return cart
}

export const ShopContextProvider = (props) => {
    const [cartItems,setCartItems]=useState(getDefaultCart)

   const addToCart=(itemID)=>{
    setCartItems((prev)=>({...prev,[itemID]:prev[itemID]+1}))
   }
   const removeFromCart=(itemID)=>{
    setCartItems((prev)=>({...prev,[itemID]:prev[itemID]-1}))
   }
   const contextValue={cartItems,addToCart,removeFromCart}
   console.log(cartItems)
  return 
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  
}
