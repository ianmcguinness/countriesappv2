import React from 'react'
import { FcGlobe } from 'react-icons/fc'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <header className='Navbar'>
      <a href="/">
      <FcGlobe size='2rem' />
      <h2>Countries of the World</h2></a>
    </header>
  )
}

export default Navbar
