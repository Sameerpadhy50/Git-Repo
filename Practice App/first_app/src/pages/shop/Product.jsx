import React from 'react'
import { ShopContext } from '../../context/ShopContext'

export const Product = (props) => {
    const {productImage,productName,price}=props.product;
   const {addToCart}=useContext(ShopContext);


  return (
    <div>
        <div >
    <img src={productImage} alt="" />
    <div>

    <h4><b>{productName}</b></h4>
    <p>${price}</p>
    </div>
    <button onClick={()=>addToCart(id)}>Add to cart</button>

  </div>
  </div>
  )
}
