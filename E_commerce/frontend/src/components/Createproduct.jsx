import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Createproduct = () => {
    const [category,setCategory]=useState([])
    const [formdata,setFormdata]=useState({})
    function insertchnage(e){
                setFormdata({...formdata,[e.target.name]:e.target.value})
    }
    function productsumbit(e){
        e.preventDefault()
        axios.post('http://localhost:5000/ecommerce/product',formdata)
        .then(()=>alert('inserted data'))
        .then(err=>console.log(err))
    }
    function getcategory(){
        axios.get('http://localhost:5000/ecommerce/category')
        .then(res=>setCategory(res.data))
        .then(err=>console.log(err))
    }
    useEffect(()=>{
         getcategory()
    },[])
  return (
    <>
     <h1>
        insert product
     </h1>


     <form action="" onSubmit={productsumbit}>
        <label htmlFor="">name</label>
            <input type="text"  name='name' onChange={insertchnage}/><br /><br />
            <label htmlFor="">price</label>
            <input type="number"  name='price' onChange={insertchnage}/><br /><br />
            <label htmlFor="">stack</label>
            <input type='number'  name='stock' onChange={insertchnage}/><br /><br />
            <select name="category" id="" onChange={insertchnage}>
                <option >select product</option>{
                    category.map((e)=>(
                        <option value={e._id} key={e._id}>{e.name}</option>
                    ))
                }
            </select>
            <input type="submit" value="submit" />
     </form>
    </>
  )
}

export default Createproduct