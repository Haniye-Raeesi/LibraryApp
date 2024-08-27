import React from "react";
import styles from "./SideBooks.module.css";

function SideBooks({ data: { image, title } }) {
  return (
    <div className={styles.container}>
      <img src={image} alt={title}></img>
      <p>{title}</p>
    </div>
  );
}

export default SideBooks;
