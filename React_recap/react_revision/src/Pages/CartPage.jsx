import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { SingleCartCard } from '../Day-2/SingleCartCard'

export const CartPage = () => {
    const[cart,setCart]=useState(null)
    
    const getData=()=>{
        axios.get("http://localhost:5400/cart").then((res)=>{setCart(res.data)}).catch((err)=>{console.log(err)})
    }
    useEffect(()=>{
        getData()
    },[])
    console.log("cart ke andar",cart)
  return (
    <div>
        <h1>Cart Page</h1>
        {cart?.map((el)=>(<SingleCartCard {...el}/>))}
    </div>
  )
}
