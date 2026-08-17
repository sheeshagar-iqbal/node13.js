import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Showproduct = () => {
  const [product,setProduct]=useState([])
  const [category,setcategory]=useState([])
 const navigate=useNavigate()

 function getcategory(){
        axios.get('http://localhost:5000/ecommerce/category')
        .then(res=>{setcategory(res.data)})
        .catch(err=>console.log(err))
    }
function changebycategory(e){
  let cate = e.target.value 
   axios.get(`http://localhost:5000/ecommerce/product/category?category=${cate}`)
        .then((res)=>{ 
          setProduct(res.data) 
          console.log(res.data)
         }      )
        .catch(err=>console.log(err))
  console.log(cate);
  
}


function getproduct(){
  
   axios.get('http://localhost:5000/ecommerce/product')
        .then((res)=>{ 
          setProduct(res.data) 
          // console.log(res.data)
        

         }      )
        .catch(err=>console.log(err))

}

function deleteproduct(id){
  console.log(id);
   axios.delete(`http://localhost:5000/ecommerce/product/${id}`)
        .then(()=>{alert('delete product')
          getproduct()
        } )
        .catch(err=>console.log(err))
  
}
  useEffect(()=>{
   getproduct()
    getcategory()

  },[])
  return (
    <>
    
    <h1>show product</h1>
    <select name="category" id="" onChange={changebycategory}>
                <option >select product</option>{
                    category.map((e)=>(
                        <option value={e._id} key={e._id}>{e.name}</option>
                    ))
                }
    </select>            
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>price</th>
          <th>stock</th>
          <th>category</th>
          <th>update</th>
          <th>delete</th>
        </tr>
      </thead>
      <tbody>
        {
          product.map((e)=>(
            <tr key={e._id}>
              <td>{e._id}</td>
              <td>{e.name}</td>
              <td>{e.price}</td>
              <td>{e.stock}</td>
              <td>{e.category?.name || ""}</td>
              <td onClick={()=> navigate(`/updateproduct/${e._id}`) }>update</td>
              <td onClick={()=>deleteproduct(e._id)}>delete</td>
            </tr>
          ))
        }
      </tbody>
    </table>
    </>
  )
}

export default Showproduct