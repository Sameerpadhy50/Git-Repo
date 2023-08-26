import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
    <div
      style={{
        display: "flex",
        gap: "20px",
        alignItem: "center",
        justifyContent: "center",
        paddingTop: "100px",
      }}
    >
      <br />
      <br />
      <br />

      <div>
        <img src={data.thumbnail} alt="" />
      </div>
      <div>
        <h2>{data.title}</h2>
        <h4>{data.brand}</h4>
        <p>{data.description}</p>
        <p>
          Price<b>{data.price}</b>
        </p>
      </div>
      <div>
        {data.images && data.images.map((image) => <img src={image} />)}
      </div>
    </div>
  );
};
