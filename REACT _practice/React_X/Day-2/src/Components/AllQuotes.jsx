import React from 'react'
import { SingleQuotes } from './SingleQuotes'

export const AllQuotes = ({quotes}) => {
  return (
    <div>
        {quotes?.map((quote)=><SingleQuotes {...quote} key={quote.id}/>)}
        
    </div>
  )
}
