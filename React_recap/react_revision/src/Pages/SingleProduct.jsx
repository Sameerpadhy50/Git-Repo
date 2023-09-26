import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "../styles/SingleProduct.module.css";

export const SingleProduct = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [image, setImage] = useState({});
  const [cartData, setCartData] = useState([]);
  const getData = () => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        // console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
    getDataCart();
  }, []);
  //Image Button to change the main image
  const handleImage = (image) => {
    console.log("image is", image);
    setImage(image);
  };

  //get request to get data from the cart end-point
  const getDataCart = () => {
    axios
      .get("http://localhost:5400/cart")
      .then((res) => {
        // console.log(res.data);
        setCartData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log("singlecartData", data);

  const handleCart = (data) => {
    // data.Qty = 1;
    let exist =
      cartData.length > 0 &&
      cartData?.filter((el) => (el.id === data.id)
      // {
        // if (el.id ===id) {
        //   el.Qty = el.Qty + 1;
        // }
      // }
      );

    console.log(exist);
    if (exist.length > 0) {
      exist[0].Qty=exist[0].Qty+1
      console.log("vraj");
      axios
        .patch(`http://localhost:5400/cart/${id}`, ...exist)
        .then((res) => {
          console.log(res);
          getDataCart()
          return alert("Added To Cart");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .post("http://localhost:5400/cart", {...data,Qty:1})
        .then((res) => {
          console.log(res);
          
          return alert("Added To Cart");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div id={style.main_div}>
      <br />
      <br />
      <br />
      <div id={style.first}>
        {data.images &&
          data.images.map((image, i) => (
            <div key={i} onClick={() => handleImage(image)}>
              <img src={image} />
            </div>
          ))}
      </div>
      <div id={style.second}>
        {image ? <img src={image} /> : <img src={data.thumbnail} alt="" />}
      </div>
      <div id={style.third}>
        <h2>{data.title}</h2>
        <h4>{data.brand}</h4>
        <p>{data.description}</p>
        <p>
          Price<b>-{data.price}₹</b>
        </p>
        <div
          style={{
            display: "flex",
            gap: "2px",
            justifyContent: "space-around",
          }}
        >
          <button
            style={{
              backgroundColor: "red",
              color: "white",
              padding: "5px",
              border: "none",
              borderRadius: "5px",
            }}
            onClick={() => handleCart(data)}
          >
            Add To Cart
          </button>
          <button
            style={{
              backgroundColor: "red",
              color: "white",
              padding: "5px",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Add To Wishlist
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
};
