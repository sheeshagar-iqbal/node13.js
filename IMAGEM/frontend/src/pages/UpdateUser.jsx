import React, { useState } from "react";
import axios from "axios";

const UpdateUser = ({ user,ongetdata,onshow }) => {

  const [frmdata, setfrmdata] = useState({
    firstname: user.firstname || "",
    lastname: user.lastname || "",
    email: user.email || "",
    phone: user.phone || "",
    geentr: user.geentr || "",
    image: null,
  });

  const changehandler = (e) => {
    const { name, value, files } = e.target;

    setfrmdata({
      ...frmdata,
      [name]: files ? files[0] : value,
    });
  };

  const submithandler = async (e) => {
    e.preventDefault();

    const formdata = new FormData();

    formdata.append("firstname", frmdata.firstname);
    formdata.append("lastname", frmdata.lastname);
    formdata.append("email", frmdata.email);
    formdata.append("phone", frmdata.phone);
    formdata.append("geentr", frmdata.geentr);

    // Image only if user selects a new image
    if (frmdata.image) {
      formdata.append("image", frmdata.image);
    }
 axios.put(`http://localhost:5000/${user._id}`,formdata )
  .then(res=>{
    alert("User updated successfully");
    ongetdata()
    onshow(false)
  })
  .catch(err=>console.log(err)  )
  };

  return (
    <form onSubmit={submithandler}>

      <label>First Name</label>
      <input
        type="text"
        name="firstname"
        value={frmdata.firstname}
        onChange={changehandler}
      />

      <label>Last Name</label>
      <input
        type="text"
        name="lastname"
        value={frmdata.lastname}
        onChange={changehandler}
      />

      <label>Email</label>
      <input
        type="email"
        name="email"
        value={frmdata.email}
        onChange={changehandler}
      />

      <label>Phone</label>
      <input
        type="tel"
        name="phone"
        value={frmdata.phone}
        onChange={changehandler}
      />

      <label>Gender</label>
      <select
        name="geentr"
        value={frmdata.geentr}
        onChange={changehandler}
      >
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>

      <label>New Image</label>
      <input
        type="file"
        name="image"
        accept="image/*"
        onChange={changehandler}
      />

      <button type="submit">
        Update User
      </button>

    </form>
  );
};

export default UpdateUser;