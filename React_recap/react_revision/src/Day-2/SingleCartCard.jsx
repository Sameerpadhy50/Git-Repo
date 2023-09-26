import React from 'react'

export const SingleCartCard = ({id,title,price,thumbnail,Qty}) => {
  return (
    <div>
        <div><img src={thumbnail} alt="" /></div>
       <div><p>{title}</p></div>
       <div><p>{price}</p></div>
       <div>
        <button>-</button>
        <p>{Qty}</p>
        <button>+</button>
       </div>
    </div>
  )
}
