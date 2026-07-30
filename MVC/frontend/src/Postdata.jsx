import React from 'react'
import { useState } from 'react'
import axios from 'axios'
const Postdata = () => {
    const [frmdata, setFrmdata]=useState({})

    function hinput(e){
        let {name, value}=e.target 
        setFrmdata({...frmdata,[name]:value})
    }

    function submit(e){
        // e.preventDefault()
        axios.post("http://localhost:5000/student",frmdata)
  .then(res=>alert('data insert successfully'))
  .catch(e=>console.log(e))
        
    }
  return (
    <>
    <form action="" onSubmit={submit}>
        <label htmlFor="">Name</label>
        <input type="text" name='name' onChange={hinput}/><br /><br />
        <label htmlFor="">Age</label>
        <input type="text" name='age' onChange={hinput}/><br /><br />
        <label htmlFor="">City</label>
        <input type="text" name='city' onChange={hinput} /><br /><br />
        <label htmlFor="">Email</label>
        <input type="text" name='email' onChange={hinput}/><br /><br />
        <label htmlFor="">Contact</label>
        <input type="text" name='contact' onChange={hinput}/><br /><br />
        <input type="submit" value="submit" />

    </form>
    </>
  )
}

export default Postdata