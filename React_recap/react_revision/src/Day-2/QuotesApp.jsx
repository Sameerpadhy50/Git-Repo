import React, { useEffect, useState } from 'react'
import { AllQuotes } from './AllQuotes'
import { Pagination } from './Pagination'
import axios from 'axios'

export const QuotesApp = () => {
    const [quotes,setQuotes]=useState(null)
    const [skip ,setSkip]=useState(0)
    const[loading,setLoading]=useState(true)
    const [limit,setLimit]=useState(5)
    console.log("quotes",quotes)
    const getData=()=>{
        axios.get(`https://dummyjson.com/quotes?limit=5&skip=${skip}`).then((res)=>(setLoading(false),setQuotes(res.data.quotes))).catch((err)=>console.log(err))
    }
    useEffect(()=>{
        getData()
    },[skip])
    const handlePageChange=(value)=>{
        setSkip(value)
    }
  return (
    <div>
        {loading?(<div><h1>Loading</h1></div>):(<AllQuotes quotes={quotes}/>)}
        
        <Pagination quotes={quotes} skip={skip} handlePageChange={handlePageChange} limit={limit}/>
    </div>
  )
}
