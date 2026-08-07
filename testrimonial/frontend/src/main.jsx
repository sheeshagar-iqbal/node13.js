import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Show from './show.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    {/* <App /> */}
    <Routes>
      <Route path='/show' element={<Show/>} />
      <Route path='/' element={<App/>} />
    </Routes>
    </BrowserRouter> 
  </StrictMode>
)
