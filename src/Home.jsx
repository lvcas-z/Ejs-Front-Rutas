import React, { useEffect, useState } from 'react'
import Card from "./components/Card"
import Navbar from './components/Navbar'

const Home = () => {
  const [beers, setBeers] = useState([])

  const getBeers = async()=>{
    const res = await fetch("https://api.punkapi.com/v2/beers")
    const data = await res.json()
    setBeers(data)
  }

  useEffect(()=>{
    getBeers()
  })

  return (
    <div>
      <Navbar/>
        <div className='grid'>
            {beers.length ? beers.map(beer => (<Card key={beer.id} data={beer} />)): null}
        </div>
    </div>
  )
}

export default Home