import React, { useState } from "react";
import styles from "./BookItem.module.css";
import { AiFillHeart } from "react-icons/ai";

function BookItem({ data, HandleLikedList }) {
  const [Like, SetLike] = useState(false);

  const LikeHandler = () => {
    HandleLikedList(data, Like);
    SetLike((Like) => !Like);
  };

  return (
    <>
      <div className={styles.card}>
        <img src={data.image} alt={data.title}></img>
        <div className={styles.info}>
          <h3>{data.title}</h3>
          <p>{data.author}</p>
          <div>
            <span>{data.language}</span>
            <span>{data.pages}</span>
          </div>
          
        </div>
        <button className={styles.Heart} onClick={LikeHandler}>
            <AiFillHeart fontSize="1.8rem" color={Like ? "red" : "#e0e0e0"} />
          </button>
      </div>
    </>
  );
}

export default BookItem;
