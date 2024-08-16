import React, { useState } from "react";
import { books } from "../constants/mockData";
import styles from "./AllBooks.module.css";
import BookItem from "./BookItem";


function AllBooks() {
  return (
    <>
      <div className={styles.container}>
        {books.map((c) => (<BookItem key={c.id} data={c}/>))
          
       }
      </div>
    </>
  );
}

export default AllBooks;
