import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <>
      <div className={styles.container}>
        <h1>Book App</h1>
        <a>BotoStart</a>    <p>     | ReactJs Full course</p>
      </div>
    </>
  );
}

export default Header;
