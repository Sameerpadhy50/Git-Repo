import React from 'react'

export const AllQuotes = ({quotes}) => {
    
  return (
    <div>
        {quotes?.map((el)=>(<div>
            <h4>{el.quote}</h4>
            <p>{el.author}</p>
            <hr />
        </div>))}
    </div>
  )
}
