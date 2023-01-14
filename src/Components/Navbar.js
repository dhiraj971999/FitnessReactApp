import React, { useState } from 'react'
import './Navbar.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {ImCross} from 'react-icons/im'
import { Link } from 'react-router-dom'

export default function Navbar({isNavrbar2}) {
    const [menuicon, setMenuicon]= useState(true);

  return (
    <>
    {/* {console.log(screen.width)} */}
      <div className={isNavrbar2?'navbar2':'navbar'}>
      {/* <div className='navbar2'> */}
          <h1>Lion's Gym</h1>
          <div className={menuicon?"navlinks":"mobile-navlinks"}>
              <ul>
                  {/* <li><Link to="/" onClick={()=>setMenuicon(!menuicon)}>Home</Link></li>
                  <li><Link to="/#" onClick={()=>setMenuicon(!menuicon)}>About</Link></li>
                  <li><Link to="/#" onClick={()=>setMenuicon(!menuicon)}>Exercise</Link></li>
                  <li><Link to="/#" onClick={()=>setMenuicon(!menuicon)}>Contact-Us</Link></li> */}

                  <li><Link to="/" >Home</Link></li>
                  <li><Link to="/#" >About</Link></li>
                  <li><Link to="/#" >Pricing</Link></li>
                  <li><Link to="/#" >ContactUs</Link></li>
              </ul>
          </div>
          <div className="ham-menu" onClick={()=>setMenuicon(!menuicon)}>
      {menuicon?<GiHamburgerMenu/>:<ImCross/>}
      </div>
      </div>
    </>
  )
}
