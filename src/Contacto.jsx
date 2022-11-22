import React from 'react'
import Navbar from './components/Navbar'

const Contacto = () => {
  return (
    <div>
      <Navbar/>
      <div className='grid'>
          <h2>¿Queres saber mas de nosotros?</h2>
          <h2>¿Sos revendedo y queres conocer precios mayoristas?</h2>
          <p>No dudes en contactarnos
            <code>Email: punkapi@beers.com</code>
            <code>Telefono: 11324568</code>
          </p>
      </div>
    </div>
  )
}

export default Contacto