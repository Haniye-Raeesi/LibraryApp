import React, { useState } from "react";
import { books } from "../constants/mockData";
import styles from "./AllBooks.module.css";
import BookItem from "./BookItem";
import SideBooks from "./SideBooks";


function AllBooks() {
  const [Liked,setLiked]=useState([]);
  const HandleLikedList =(book , status)=>{
    if(status==true){
      const NewUnliked=Liked.filter(x=>x.id!==book.id);
setLiked(NewUnliked);
console.log(Liked);
    }
    else{
      setLiked(z=>[...z,book]);
      console.log(Liked);
    }

  }
  return (
    <>
   
      <div className={styles.container}>
        <div className={styles.cards}>
        {books.map((s) => (<BookItem key={s.id} data={s} HandleLikedList={HandleLikedList}/>))}
        </div>
        {!!Liked.length &&  <div className={styles.favorite}>
          { Liked.map(x=><SideBooks key={x.id} data={x}/>)}
        </div>}
        
      </div>
    </>
  );
}

export default AllBooks;
