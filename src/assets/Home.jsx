import React from 'react'
import Header from "../components/Header"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import Presentation from '../components/Presentation'
function Home() {
  return (
    <> 
     <Header/> 
     <Presentation/>
     <Skills/> 
     <Projects/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default Home