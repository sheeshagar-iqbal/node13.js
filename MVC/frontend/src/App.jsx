import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'



// crosss origin resouce shearing
const App = () => {
  const [apidata , setapidata]=useState([])
  function del(id){
    axios.delete(`http://localhost:5000/student/${id}`)
    .then(res=>alert('deleter'))
    .catch(err=>console.log('something wrong',err)
    )
  }
  useEffect(()=>{
  axios.get("http://localhost:5000/student")
  .then(res=>setapidata(res.data.data))
  .catch(e=>console.log(e))
  
},[del])
  return (
    <div>
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
      </tr>

        ))}
     </tbody>
        
      </table></div>
  )
}

export default App
