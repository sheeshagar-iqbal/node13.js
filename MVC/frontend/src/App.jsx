import React, { useEffect } from 'react'
import axios from 'axios'



// crosss origin resouce shearing
const App = () => {
  useEffect(()=>{
  axios.get("http://localhost:5000/student")
  .then(res=>console.log(res.data.data))
  .catch(e=>console.log(e))
  
},[])
  return (
    <div>App</div>
  )
}

export default App
