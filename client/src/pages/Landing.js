import React from 'react'
import About from '../components/About'
import Feature from '../components/Feature'
import Header from '../components/Header'
import Navbar from '../components/NaVbar'
import Offer from '../components/Offer'
import './Landing.css'


function Landing() {
  return (
    <div>
       <Navbar/>
       <Header/>
       <Feature/>
       <Offer/>
       <About/>
        
        
        </div>
  )
}

export default Landing