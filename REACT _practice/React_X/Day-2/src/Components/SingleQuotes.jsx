import React from 'react'
import style from "../styles/SingleQuote.module.css"
export const SingleQuotes = ({id,quote,author}) => {
    
  return (
    <div className={style.quote_div}>
        <h3>{quote}</h3>
        <p>{author}</p>
    </div>
  )
}
