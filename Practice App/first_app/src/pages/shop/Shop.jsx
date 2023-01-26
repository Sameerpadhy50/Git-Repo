import { Repeat } from 'phosphor-react'
import React from 'react'
import {PRODUCTS} from "../.././product"
import { Product } from './Product'
export const Shop = () => {
  return (
    <div className='shop'>
<div className='shopTitle'>
<h1>Highbrid Shop</h1>
</div>
<div className='products' style={{display:"grid", gridTemplateColumns:"Repeat(4,1fr)"}}>
  {PRODUCTS.map((products)=>( <Product product={products}/>))}


</div>
    </div>
  )
}
