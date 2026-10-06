import React, { useState } from 'react'
import { Menu } from 'lucide-react'

import logo from '../assets/logo.png'

 

function NavBar() {
  const [menuDisplay, setMenuDisplay]= useState("hidden")
   const nav = document.getElementById('navMenu');
  const styles = {
    logo: {
      width: '100px',

    },
    
  }
  const links= [
    {
    text: "About",
    href: "#about"
  },
    {
    text: "Contact",
    href: "#Contact"
  },
    {
    text: "Services",
    href: "#sevices"
  }

]

  const toggleMenu = () => {
    setMenuDisplay((prev) => (prev === "hidden" ? "block" : "hidden"))
  }
  console.log(menuDisplay)
  return (
    <header id='header' className='sticky top-0'>
      <div className=' sticky flex flex-col md:flex-row justify-between items-center p-4 bg-gray-100'>
        <div className='flex justify-between items-center w-full md:w-auto'>
          <img src={logo} alt="logo" style={styles.logo} />
          <button onClick={() => toggleMenu()} className='md:hidden'>
            <Menu className='cursor-pointer' />
          </button>
        </div>
        <nav id="navMenu" className={`w-full md:w-auto ${menuDisplay} md:block mt-4 md:mt-0`}>
          <div className='flex flex-col md:flex-row gap-4 md:items-center sticky top-0 underline p-4 md:p-0 z-50'>
            {links.map(link=>(


              <a href={link.href} className='text-gray-700 hover:text-blue-500 backdrop-blur-3xl'>{link.text}</a>

            ))
           }
          </div>
        </nav>
      </div>
    </header>
  )
}


export default NavBar