import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Updatedata from './Updatedata'

const Show = () => {
   
    const [apidata , setapidata]=useState([])
    const [userdata, setUserdata]=useState({})
    const [show, setShow]=useState(false)
    const navigate =useNavigate()
    const [sorted ,setSorted]=useState([])


    function del(id){
    axios.delete(`http://localhost:5000/student/${id}`)
    .then(res=>alert('deleter'))
    .catch(err=>console.log('something wrong',err)
    )
  }

  function update(id){
    axios.get(`http://localhost:5000/student/${id}`)
    .then(res=>setUserdata(res.data)   )
    // .then(res=>console.log(res.data)       )
    .catch(err=>console.log('something wrong',err)
    )
  }

  function sortdata(s){
    // console.log(s);
  axios.get(`http://localhost:5000/student/sort?name=${s}`)
  .then(res=>setSorted(res.data)  )
  .catch(e=>console.log(e))
    
  }


  useEffect(()=>{
  axios.get("http://localhost:5000/student")
  .then(res=>setapidata(res.data.data))
  .catch(e=>console.log(e))
  
},[del])

  return (
    <>
    <h1>show info</h1>
    {/* <button onClick={()=>useNavigate('/search')}>search</button> */}
    <button onClick={()=>navigate('/search')}>search</button>
    <select name="" id="" onClick={(e)=>sortdata(e.target.value)}>
      <option value="asc">Ascending</option>
      <option value="desc">Descending</option>
    </select>

          <table>
    
     <thead>
       <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Age</th>
        <th>City</th>
        <th>Email</th>
        <th>contact</th>
      </tr>
     </thead>
     <tbody>
       {apidata.map((e)=>(
      <tr key={e._id}>
      
        <td>{e._id}</td>
        <td>{e.name}</td>
        <td>{e.age}</td>
        <td>{e.email}</td>
        <td>{e.city}</td>
        <td>{e.contact}</td>
        <td onClick={()=>del(e._id)}>DELETE</td>
        <td onClick={()=>(update(e._id),setShow(!show))}>Update</td>
      </tr>

        ))}
     </tbody>
        
      </table>

     {
      show && <Updatedata data={userdata} />
     }




     <h2>sort data</h2>
      {sorted.map((e)=>(
      <tr key={e._id}>
      
        <td>{e._id}</td>
        <td>{e.name}</td>
        <td>{e.age}</td>
        <td>{e.email}</td>
        <td>{e.city}</td>
        <td>{e.contact}</td>
        <td onClick={()=>del(e._id)}>DELETE</td>
        <td onClick={()=>(update(e._id),setShow(!show))}>Update</td>
      </tr>

        ))}
     
    </>
  )
}

export default Show