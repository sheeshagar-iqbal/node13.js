
import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Show = () => {
  const [api ,setapi]=useState([])

   function getstudent(){
       axios.get('http://localhost:2000/review')
    .then(res=>{setapi(res.data)
      // console.log(res.data);
      
    })
    .catch(e=>console.log(e))
  }
  function casehedler(c){
      axios.get(`http://localhost:2000/review/case?case=${c}`)
    .then(res=>{setapi(res.data)})
    .catch(e=>console.log(e))
  }

  function cityhedler(c){
      axios.get(`http://localhost:2000/review/city?city=${c}`)
    .then(res=>{setapi(res.data)})
    .catch(e=>console.log(e))
  }

    function agehedler(c){
      axios.get(`http://localhost:2000/review/age?age=${c}`)
    .then(res=>{setapi(res.data)})
    .catch(e=>console.log(e))
  }
  useEffect(()=>{
   getstudent()
  },[])
  
  return (
    <>
       <h3>rewiew tabel</h3>
    <select name="" id=""name='' onChange={(e)=>casehedler(e.target.value)}>
        <option value="ex">Excellent</option>
        <option value="best">Best</option>
        <option value="worst">Worst</option>
      </select> <br />

      <select name="" id=""name='' onChange={(e)=>cityhedler(e.target.value)}>
        <option value="bhopal">Bhopal</option>
        <option value="Aiko Ellison">Aiko Ellison</option>
        <option value="mumbai">Mumbai</option>
      </select>

       <select name="" id=""name='' onChange={(e)=>agehedler(e.target.value)}>
        <option value="0-18">0-18</option>
        <option value="18-30">18-30</option>
        <option value="30-60">30-60</option>
      </select>
    <table border=''>
      
      <thead>
        <tr>
          <th>name</th>
          <th>age</th>
          <th>city</th>
          <th>review</th>
          <th>case</th>
        </tr>
      </thead>

      <tbody>
        {api.map((e)=>(
          <tr key={e._id}>
            <td>{e.name}</td>
            <td>{e.age}</td>
            <td>{e.city}</td>
            <td>{e.review}</td>
            <td>{e.case}</td>
          </tr>
        ))}
      </tbody>
    </table>  
    </>
  )
}

export default Show