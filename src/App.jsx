import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Home from './pages/Home'

import { Routes,Route } from 'react-router-dom'
import Contact from './pages/Contact'
import About from './pages/About'
import Error from './pages/Error'
import Login from './pages/Login'
import Aboutus from './pages/Aboutus'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/aboutus'element={<Aboutus/>}/>
    </Routes>
    {/* <Error/> */}
   {/* <Setisfied/>  */}
    </>
  )
}

export default App
