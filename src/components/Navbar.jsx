import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <Link to='/'><h3>Home</h3></Link>
        <Link to='/contacto'><h3>Contacto</h3></Link>
    </nav>
  )
}

export default Navbar