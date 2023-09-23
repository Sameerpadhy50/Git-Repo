import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "../styles/SingleProduct.module.css";

export const SingleProduct = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const[image,setImage]=useState(null)
  const getData = () => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  const handleImage=(image)=>{
    console.log("image is",image)
    setImage(image)
  }

  const handleCart=(data)=>{
    axios.post("http://localhost:5400/cart",data).then((res)=>
    {console.log(res)}).catch((err)=>{console.log(err)})

  }
  return (
    <div id={style.main_div}>
      <br />
      <br />
      <br />
      <div id={style.first}>
        {data.images && data.images.map((image) => <div onClick={()=>handleImage(image)}><img src={image} /></div>)}
      </div>
      <div id={style.second}>
       { image?<img  src={image}/>:<img src={data.thumbnail} alt=""  />}
      </div>
      <div id={style.third}> 
        <h2>{data.title}</h2>
        <h4>{data.brand}</h4>
        <p>{data.description}</p>
        <p>
          Price<b>-{data.price}₹</b>
        </p>
        <div style={{display:"flex",gap:"2px",justifyContent:"space-around"}}>
        <button style={{backgroundColor:"red",color:"white",padding:"5px",border:"none",borderRadius:"5px"}} onClick={()=>handleCart(data)}>Add To Cart</button>
        <button style={{backgroundColor:"red",color:"white",padding:"5px",border:"none",borderRadius:"5px"}}>Add To Wishlist</button>
      </div>
      <div>
        
      </div>
      </div>
    </div>
  );
};
