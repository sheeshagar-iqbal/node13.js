import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Createproduct from './components/Createproduct'
import Showproduct from './components/Showproduct'
const App = () => {
  return (
    <>
    <Routes>
      <Route index element={<Createproduct/>}/>
      <Route path='/showproduct' element={<Showproduct/>}/>
    </Routes>
    </>
  )
}

export default App