import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <>
      <div className={styles.container}>
        <h1>Book App</h1>
        <a>App By me!</a> <p> | ReactJs Project</p>
      </div>
    </>
  );
}

export default Header;
