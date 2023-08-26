import axios from "axios";
import React, { useEffect, useState } from "react";
import { SingleCart } from "../Day-2/SingleCart";
import style from "../styles/Productpage.module.css"
import { Pagination } from "../Day-2/Pagination";
import { useSearchParams } from "react-router-dom";

export const ProductsPage = () => {
  const [searchParams,setSearchParams]=useSearchParams()
  const [data, setData] = useState([]);
  const [limit,setLimit]=useState(Number(searchParams.get("limit"))||12)
  const [skip,setSkip]=useState(Number(searchParams.get("skip"))||0)
  const getData = () => {
    axios
      .get(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
      .then((res) => {
        console.log(res.data.products);
        setData(res.data.products)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
    setSearchParams({limit:limit,skip:skip})
  }, [skip,limit]);
  const handlePageChange=(value)=>{
    setSkip(value)
  }
  return(
  <div >
    <br /><br />
    <div id={style.productPage}>
    {data.map((el)=>(
    <div>{<SingleCart key={el.id} {...el}/>}</div>
    
  ))}
    </div>
    <br /><br />
    <div>
        <Pagination skip={skip} limit={limit} handlePageChange={handlePageChange}/>
    </div>
    
    
  </div>);
};
