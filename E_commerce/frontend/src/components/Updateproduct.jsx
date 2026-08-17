import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Updateproduct = () => {
    const [formdata,setFormdata]=useState({})
    const [category,setCategory]=useState([])
    
    const navigate =useNavigate()
    const {id}= useParams()
    function insertchnage(e){
                setFormdata({...formdata,[e.target.name]:e.target.value})
    }
    function productsumbit(e){
        e.preventDefault()
        axios.put(`http://localhost:5000/ecommerce/product/${id}`,formdata)
        .then(()=>alert('updated data'))
        .catch(err=>console.log(err))
        navigate('/showproduct')
    }
    function getproduct(){
        axios.get(`http://localhost:5000/ecommerce/product/${id}`)
        .then(res=>setFormdata(res.data))
        .catch(err=>console.log(err))
    }
    function getcategory(){
        axios.get('http://localhost:5000/ecommerce/category')
        .then(res=>setCategory(res.data))
        .catch(err=>console.log(err))
    }
    useEffect(()=>{
         getproduct()
         getcategory()
        console.log(id);
        
    },[])
  return (
    <>
     <h1>
        update product
     </h1>


     <form action="" onSubmit={productsumbit}>
        <label htmlFor="">name</label>
            <input type="text"  name='name' value={formdata.name} onChange={insertchnage}/><br /><br />
            <label htmlFor="">price</label>
            <input type="number"  name='price' value={formdata.price} onChange={insertchnage}/><br /><br />
            <label htmlFor="">stack</label>
            <input type='number'  name='stock' value={formdata.stock} onChange={insertchnage}/><br /><br />
            <select name="category" id="" value={formdata.category} onChange={insertchnage}>
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

export default Updateproduct