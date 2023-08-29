import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "../styles/SingleProduct.module.css";

export const SingleProduct = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
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

  return (
    <div id={style.main_div}>
      <br />
      <br />
      <br />
      <div id={style.first}>
        {data.images && data.images.map((image) => <img src={image} />)}
      </div>
      <div id={style.second}>
        <img src={data.thumbnail} alt="" />
      </div>
      <div id={style.third}> 
        <h2>{data.title}</h2>
        <h4>{data.brand}</h4>
        <p>{data.description}</p>
        <p>
          Price<b>{data.price}</b>
        </p>
      </div>
    </div>
  );
};
