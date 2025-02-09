import { useState } from 'react'
import { Routes ,Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import Registration from './components/Registration/Registration'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Hashira from './components/Domain/Hashira'
import Ticket from './components/Ticket/Ticket.jsx'

function App() {

  return (
    <div className='bg-black text-white'>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ticket" element={<Ticket/>} />
        </Routes>
      <Footer/>
    </div>
  )
}

export default App
