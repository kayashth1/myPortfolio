import React from 'react'
import Navbar from "./components/navbar/Navbar"
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Skill from './components/Skills/Skill'
import Footer from './components/Footer/Footer'
import Projects from './components/project/Projects'
function App() {

  return (
    <>
     <Navbar/>
     <Home/>
     <About/>
     <Skill/>
     <Projects/>
     <Footer/>
    </>
  )
}

export default App
