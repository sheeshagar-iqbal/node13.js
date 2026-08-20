import axios from 'axios'
import React, { useState } from 'react'

const Imageupload = () => {
    const [img,setImg]=useState()
    function submithandler(e){
                e.preventDefault()
                const formdata = new FormData()
                formdata.append("image",img)
                axios.post('http://localhost:5000/imgupload',formdata)
                .then(()=>alert("image inserted"))
                .catch((err)=>console.log('img not inserted',err) )
    }
    function changehandler(e){
        console.log(e.target.files[0]);
        setImg(e.target.files[0])
        
    }
  return (
    <>
    <h1>image</h1>
    <form action="" onSubmit={submithandler}>
        <label htmlFor="">image</label>
        <input type="file" name="image" id="" onChange={changehandler} />
        <input type="submit" value="upload" />
    </form>
    </>
  )
}

export default Imageupload