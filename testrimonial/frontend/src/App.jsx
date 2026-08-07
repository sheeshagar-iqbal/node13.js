import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import {  Route, Routes, useNavigate } from 'react-router-dom';
import Show from './show';

const App = () => {
  const [data ,setdata]=useState()
const navigate =useNavigate()
  function inputhandler(e){
    let {name,value}=e.target;
    setdata({...data,[name]:value})
    // console.log(name,value);
    
  }
  function sumbit(e){
    e.preventDefault()
    console.log(data);
    axios.post('http://localhost:2000/review',data)
    .then(res=>{alert('inseted data')
      //  getstudent()
   navigate('/show')
    })
    .catch(e=>console.log(e))

  

    
  }
 
  return (
    <>
    
    
    <h2>Review Form</h2>
    <form action="" onSubmit={sumbit}>
      <label htmlFor="">Name</label>
      <input type="text" name='name' onChange={inputhandler} /><br /><br />
      <label htmlFor="">City</label>
      <input type="test" name='city' onChange={inputhandler}/><br /><br />
      <label htmlFor="">Age</label>
      <input type="number" name='age' onChange={inputhandler}/><br /><br />
      <label htmlFor="">Review</label>
      <input type="text" name='review' onChange={inputhandler}/><br /><br />
      <label htmlFor="">Case</label>
      <select name="" id=""name='case'  onChange={inputhandler}>
        <option value="ex">Excellent</option>
        <option value="best">Best</option>
        <option value="worst">Worst</option>
      </select><br /><br />
      <input type="submit" value="Submit" />
    </form>

   
    </>
  )
}

export default App