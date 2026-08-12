import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Showproduct = () => {
  const [product,setProduct]=useState([])

  useEffect(()=>{
    axios.get('http://localhost:5000/ecommerce/product')
        .then((res)=>{ 
          // setProduct(res.data) 
          console.log(res.data)
         }      )
        .catch(err=>console.log(err))
  },[])
  return (
    <>
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>price</th>
          <th>stock</th>
        </tr>
      </thead>
      <tbody>
        {/* {
          product.map((e)=>(
            <tr key={e._id}>
              <td>{e._id}</td>
              <td>{e.name}</td>
              <td>{e.price}</td>
              <td>{e.stock}</td>
            </tr>
          ))
        } */}
      </tbody>
    </table>
    </>
  )
}

export default Showproduct