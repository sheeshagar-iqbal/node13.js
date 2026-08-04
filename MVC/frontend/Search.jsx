import axios from 'axios';
import React from 'react'
import { useState } from 'react';

const Search = () => {

  const [search,setSearch]=useState([])

  
  function hsearch(vl){
    console.log(vl);
    
    axios.get(`http://localhost:5000/student/search?name=${vl}`)
    .then(res=>setSearch(res.data))
    .catch(err=>console.log('not search',err))
  }

  return (
    <>
    <h2>Search Data</h2>
     <input type="text" onChange={(e)=>hsearch(e.target.value)} />


    { search.map((e)=>(
      <div key={e._id}>
        <h2>{e.name}</h2>
        <h2>{e.email}</h2>
        <h2>{e.city}</h2>
        <h2>{e.contact}</h2>
        <h2>{e.age}</h2>
      </div>
     ))}
    </>
  )
}

export default Search