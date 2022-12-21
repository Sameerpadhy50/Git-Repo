import React from 'react'

export const Pagination = ({skip,handlechange}) => {
    const page=skip/5+1
  return (
    
    <div>
        <button   disabled={skip==0}onClick={()=>handlechange(skip-5)}>Previous</button>
        <button>{page}</button>
        <button onClick={()=>handlechange(skip+5)}>Next</button>
    </div>
  )
}
