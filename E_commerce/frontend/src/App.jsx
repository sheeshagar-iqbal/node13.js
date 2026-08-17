import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Createproduct from './components/Createproduct'
import Showproduct from './components/Showproduct'
import Updateproduct from './components/Updateproduct'
const App = () => {
  return (
    <>
    <Routes>
      <Route index element={<Createproduct/>}/>
      <Route path='/showproduct' element={<Showproduct/>}/>
      <Route path='/updateproduct/:id' element={<Updateproduct/>}/>
    </Routes>
    </>
  )
}

export default App