import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing from './Landing'
import CourseCreate from './courseCreate'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './Login'
import Register from './Register'



function App() {

  return (
    <>
    <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/about" element={<CourseCreate />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

            </Routes>
            
        </Router>
    </>
  )
}

export default App
