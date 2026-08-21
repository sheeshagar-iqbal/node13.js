import axios from "axios";
import React, { useEffect, useState } from "react";

const Imageupload = () => {
  const [img, setImg] = useState();
  const [retrive,setRetrive]=useState([])
  function getimage() {
    axios
      .get("http://localhost:5000/imgupload")
      .then((res) => {setRetrive(res.data.data)
        console.log(res.data.data);
        
      })
      .catch((err) => console.log("img not inserted", err));



  }
  function submithandler(e) {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("image", img);
    axios
      .post("http://localhost:5000/imgupload", formdata)
      .then(() => {alert("image inserted"),getimage()})
      .catch((err) => console.log("img not inserted", err));
  }
  function changehandler(e) {
    console.log(e.target.files[0]);
    setImg(e.target.files[0]);
  }
  useEffect(()=>{
    getimage()
  },[])
  return (
    <>
      <h1>image</h1>
      <form action="" onSubmit={submithandler}>
        <label htmlFor="">image</label>
        <input type="file" name="image" id="" onChange={changehandler} />
        <input type="submit" value="upload" />
      </form>
        <div style={{background:"gray", display:"flex",flexWrap:'wrap',gap:"10px",justifyContent:'space-around'}}>

      {

       retrive.map((img)=>(
            <div key={img._id} >
            <img  src={`http://localhost:5000/uploads/${img.image}`} height="300px" width="300px"/>
          </div>
          
        ))
        
      }
        </div>

    </>
  );
};

export default Imageupload;
