import React from 'react'
import Home from './components/Home'
import About from './components/About'
import {  Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </>
  )
}

export default App
