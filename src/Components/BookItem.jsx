import React, { useState } from "react";
import styles from "./BookItem.module.css";
import { PiHeart } from "react-icons/pi";


function BookItem({ data }) {
  const [Liked,SetLiked]=useState([]);
  const LikeHandler=()=>{
  SetLiked((s) => [...s, Liked]);
  console.log(Liked);
  }
  return (
    <>
      <div className={styles.container}>
        <img src={data.image} alt={data.title}></img>
        <h3>{data.title}</h3>
        <p>{data.author}</p>
        <div>
          <span>{data.language}</span>
          <span>{data.pages}</span>
          <span className={styles.Heart} onClick={LikeHandler}><PiHeart/></span>
        </div>
      </div>
    </>
  );
}

export default BookItem;
