import React, { useState } from "react";
import { books as BookData } from "../constants/mockData";
import styles from "./AllBooks.module.css";
import BookItem from "./BookItem";
import SideBooks from "./SideBooks";
import SearchBar from "./SearchBar";



function AllBooks() {
  const [Liked,setLiked]=useState([]);
  const [search,setSearch]=useState([]);
  const [books,setBooks]=useState(BookData);


  const HandleLikedList =(book , status)=>{
    if(status==true){
      const NewUnliked=Liked.filter(x=>x.id!==book.id);
setLiked(NewUnliked);
    }
    else{
      setLiked(z=>[...z,book]);
      console.log(Liked);
    }
  }
  const SearchHandler=()=>{
    if (search) {
      const NewBooks=BookData.filter(s=>s.title.toLowerCase().includes(search));
      setBooks(NewBooks);
    }
    else{
      setBooks(BookData); 
    }

  }
  return (
    <>
   <SearchBar search={search} setSearch={setSearch} SearchHandler={SearchHandler}/>
      <div className={styles.container}>
        <div className={styles.cards}>
        {books.map((s) => (<BookItem key={s.id} data={s} HandleLikedList={HandleLikedList}/>))}
        </div>
        {!!Liked.length &&  
        <div className={styles.favorite}>
       
          { Liked.map(x=><SideBooks key={x.id} data={x}/>)}
        </div>}
        
      </div>
    </>
  );
}

export default AllBooks;
