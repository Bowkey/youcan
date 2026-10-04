import React from 'react'
import { Menu } from 'lucide-react'

import logo from '../assets/logo.png'
function NavBar() {

  const styles = {
    logo: {
      width: '100px',

    }

  }
  return (
    <header>
      <div className='flex justify-between items-center p-4 bg-gray-100 '>

        <img src={logo} alt="logo" style={styles.logo} />
        <Menu className='md:hidden' />
        <nav className='md:flex md:items-center md:space-x-4 hidden'>
        <a href="#" className='text-gray-700 hover:text-blue-500'>Home</a>
        <a href="#" className='text-gray-700 hover:text-blue-500'>About</a>
        <a href="#" className='text-gray-700 hover:text-blue-500'>Contact</a>
      </nav>
      </div>
      
    </header>
  )
}


export default NavBar