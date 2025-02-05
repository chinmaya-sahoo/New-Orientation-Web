import { useState } from 'react'
import { Routes ,Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import Registration from './components/Registration/Registration'

function App() {

  return (
    <div>  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>    
    </div>
  )
}

export default App
