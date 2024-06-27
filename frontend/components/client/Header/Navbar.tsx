import React from 'react'
import { NaveElements } from '../clientComponents'
import '@/styles/header/navbar.scss'
const Navbar = () => {
  return (
    <nav>
      <div id='logo'>
        <a href='/'>ChinSawMan.</a>
      </div>
      <NaveElements />
    </nav>
  )
}

export default Navbar
