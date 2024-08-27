import React from 'react'
import { IoSearchSharp } from 'react-icons/io5'
import styles from "./SearchBar.module.css"

function SearchBar({search,setSearch,SearchHandler}) {
 
  return (
    <div className={styles.search}>
        <input type='text' placeholder='Search Title' value={search} onChange={e=> setSearch(e.target.value.toLowerCase().trim())}></input>
        <button onClick={SearchHandler}>
            <IoSearchSharp/>
        </button>
        
    </div>
  )
}

export default SearchBar