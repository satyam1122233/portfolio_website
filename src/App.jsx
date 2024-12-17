import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacts from './components/Contacts'
import Skills from './components/Skills'

function App() {
  return (
    <>
        <Navbar />
        <Home/>
        <About/>
       <Skills/>
       <Projects/>
       <Contacts/>

    </>
  )
}

export default App
