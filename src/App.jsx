import { useState } from 'react'
import { Routes ,Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import Registration from './components/Registration/Registration'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <div className='bg-black text-white'>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>    
    </div>
  )
}

export default App
