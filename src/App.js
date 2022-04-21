import './App.css'
import About from './Componets/About'
import Navbar from './Componets/Navbar'
import Testomonials from './Componets/Testomonials'
import Home from './Componets/Home'
import Login from './Componets/Login'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App () {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/testomonials' element={<Testomonials />} />
      </Routes>
    </>
  )
}

export default App
