import axios from "axios";
import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
import UpdateUser from "./UpdateUser";

const Imageupload = () => {
  const [img, setImg] = useState();
  const [frmdata, setFrmdata] = useState({});
  const [retrive, setRetrive] = useState([]);
  const [show ,setshow]=useState(false)
  const [selectedUser,setselectedUser]=useState({})
  // data get
  function getimage() {
    axios
      .get("http://localhost:5000/")
      .then((res) => {
        setRetrive(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log("img not inserted", err));
  }

  //  update and delete

  const handleUpdate = (user) => {
    console.log("Update:");
    setselectedUser(user)
  };

  const handleDelete = (id) => {
    console.log("Delete ID:", id);
    axios
      .delete(`http://localhost:5000/${id}`)
      .then((res) => {
        alert("data deleted")
        getimage()
      })
      .catch((err) => console.log("img not delete", err));
  };

  function submithandler(e) {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("firstname", frmdata.firstname);
    formdata.append("lastname", frmdata.lastname);
    formdata.append("email", frmdata.email);
    formdata.append("phone", frmdata.phone);
    formdata.append("geentr", frmdata.geentr);
    formdata.append("image", frmdata.image);
    console.log([...formdata.entries()]);

    axios
      .post("http://localhost:5000/", formdata)
      .then(() => {
        alert("image inserted")
         getimage()
      })
      .catch((err) => console.log("img not inserted", err));
  }
  function changehandler(e) {
    const { name, value, files } = e.target;

    setFrmdata({
      ...frmdata,
      [name]: files ? files[0] : value,
    });
    // console.log(e.target.files[0]);
    // setImg(e.target.files[0]);
  }
  useEffect(() => {
    getimage();
  }, []);
  return (
    <>
      <h1>image</h1>
      <form onSubmit={submithandler}>
        {/* First Name */}
        <label htmlFor="firstname">First Name</label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          placeholder="Enter first name"
          onChange={changehandler}
        />

        {/* Last Name */}
        <label htmlFor="lastname">Last Name</label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          placeholder="Enter last name"
          onChange={changehandler}
        />

        {/* Email */}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter email"
          onChange={changehandler}
        />

        {/* Phone */}
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="Enter phone number"
          onChange={changehandler}
        />

        {/* Gender */}
        <label htmlFor="geentr">Gender</label>
        <select name="geentr" id="geentr" onChange={changehandler}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        {/* Image */}
        <label htmlFor="image">Image</label>
        <input
          type="file"
          name="image"
          id="image"
          accept="image/*"
          onChange={changehandler}
        />

        {/* Submit */}
        <input type="submit" value="Upload" />
      </form>









        {/* data show */}

      <div
        style={{
          background: "gray",
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          justifyContent: "space-around",
        }}
      >


        {retrive.map((user) => (
         
            <UserCard key={user._id}
              user={user}
              onshow={setshow}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
      
      
        ))}
      </div>


      {/* update form */}
      {show && (
  <UpdateUser user={selectedUser} ongetdata={getimage} onshow={setshow}/>
)}
    </>
  );
};

export default Imageupload;


      {/* <img  src={`http://localhost:5000/uploads/${img.image}`} height="300px" width="300px"/> */}