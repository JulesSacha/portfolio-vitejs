import React from 'react'
import logo from "../assets/images/astronout.png"
import logo1 from "../assets/images/astronout1.png"
import Navbar from './Navbar'
import "../styles.css"

function Header() {
  return (
   <>
   <div id='home' className=' bg-center bg-cover bg-no-repeat flex flex-col '>
    <Navbar/>
   </div>
   </>
  )
}

export default Header