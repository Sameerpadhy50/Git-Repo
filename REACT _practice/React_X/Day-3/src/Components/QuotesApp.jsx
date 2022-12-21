import {useEffect,useState} from 'react'
import { AllQuotes } from './AllQuotes'
import { Pagination } from './Pagination'
import axios from 'axios'
import { Img } from '@chakra-ui/react'

export const QuotesApp = () => {

    const[quotes,setQuotes]=useState(null)
    const [skip ,setSkip]=useState(0)
    const [loading,setLoading]=useState(true)
   // const[error ,setError]=useState(false)
    useEffect(()=>{
        axios.get(`https://dummyjson.com/quotes?limit=5&skip=${skip}`).then((res)=>{
            //console.log(res.data.quotes)
           setLoading(false)
            // setError(false)
            setQuotes(res.data.quotes)
        }).catch((err)=>{
          alert(err)
        })
           
    },[skip])
 const handlechange =(value)=>{
    setSkip(value)
 }
//  if(loading){
//     return <h1>Loading... </h1>
//  }
// if(error){
//   <img src="https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt:png />
// }

  return (
    <div>
        {loading ?<h1>Loading... </h1>: <AllQuotes quotes={quotes} />}
        {/* {error?<img src="https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt:png />: <AllQuotes quotes={quotes} />} */}
        
        <Pagination skip={skip} handlechange={handlechange}/>
    </div> 
  )
}
