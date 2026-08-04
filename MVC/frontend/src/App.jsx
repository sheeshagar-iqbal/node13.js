import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import Postdata from './Postdata'
import Updatedata from './Updatedata'
import { Route, Routes } from 'react-router-dom'
import Show from './Show'
import Search from '../Search'



// crosss origin resouce shearing
const App = () => {
  
  
  
  return (
    <div>

    <Routes>
      <Route path='/' element={<Postdata/>}/>
      <Route path='/show' element={<Show/>}/>
      <Route path='/search' element={<Search/>}/>
    </Routes>





     
      
      </div>
  )
}

export default App
