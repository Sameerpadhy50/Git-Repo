import React from 'react'

export const SingleCartCard = ({id,title,price,thumbnail}) => {
  return (
    <div>
        <div><img src={thumbnail} alt="" /></div>
       <div><p>{title}</p></div>
       <div><p>{price}</p></div>
       <div>
        <button>-</button>
        <p>1</p>
        <button>+</button>
       </div>
    </div>
  )
}
