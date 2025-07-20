import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import Signin from './components/Sign'
import Home from './components/Home'

function App() {
   const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
