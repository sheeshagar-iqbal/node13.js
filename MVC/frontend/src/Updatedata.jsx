import React from 'react'
import { useState } from 'react'
import axios from 'axios'
const Updatedata = ({data}) => {
  if (!data) return <h1>Loading...</h1>;
  // let {_id,name,age,city,email,contact}= data
  // console.log(_id);
  
    const [frmdata, setFrmdata]=useState(data)
    
    

    function hinput(e){
        let {name, value}=e.target 
        setFrmdata({...frmdata,[name]:value})
    }

    function submit(e){
        e.preventDefault()
        console.log(frmdata);
        
        axios.put(`http://localhost:5000/student/${frmdata._id}`,frmdata)
  .then(res=>alert('data updated successfully'))
  .catch(e=>console.log(e))
        
    }
  return (
    <>
    <form action="" onSubmit={submit}>
        <label htmlFor="">Name</label>
        <input type="text" name='name' value={frmdata.name} onChange={hinput}/><br /><br />
        <label htmlFor="">Age</label>
        <input type="text" name='age' value={frmdata.age} onChange={hinput}/><br /><br />
        <label htmlFor="">City</label>
        <input type="text" name='city' value={frmdata.city} onChange={hinput} /><br /><br />
        <label htmlFor="">Email</label>
        <input type="text" name='email' value={frmdata.email} onChange={hinput}/><br /><br />
        <label htmlFor="">Contact</label>
        <input type="text" name='contact' value={frmdata.contact} onChange={hinput}/><br /><br />
        <input type="submit" value="submit" />

    </form>
    </>
  )
}

export default Updatedata