import React from 'react'
import './HomeBanner.css'
import Navbar from './Navbar'

export default function HomeBanner() {
  return (
    <>
    <div className='HomeBanner'>
      

   <Navbar/>
    <div className='bg-main'>
      
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="btn-main">
        <button>GET STARTED</button>
        <button>WATCH TRAILER ▶</button>
      </div>
    </div>
    <div className="home-background"></div>
    </div>
    </>
  )
}
