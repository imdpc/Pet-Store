import React, { useState } from 'react'
import './StudioNav.css'
import search from '../../Assets/Navbar img/search-interface-symbol.png'
import profile from '../../Assets/Navbar img/user.png'
import bag from '../../Assets/Navbar img/bag.png'
const StudioNav = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    // main div flex for studio navbar
    <div className="studio-Navbar">
      <div
        className={`nav-toggle ${isOpen && 'open'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>

      <div className="header-text-and-nav-items-for-studio-nav">
        <img
          style={{ height: '1.1em', width: '1.1em' }}
          src={search}
          alt=""
          srcset=""
        />
        <div className="middle-content-studio-navbar">
          <div className="nav-logo-for-studio-navbar">
            <p>Studio</p>
          </div>
          {/* middle content for studio navbar */}
          <div className={`nav-items-for-studio-navbar ${isOpen && 'open'}`}>
            <p href="/home">Prints</p>
            <p href="/about">Orignal</p>
            <p href="/service">Art Object</p>
            <p href="/contact">Shop by Artist</p>
            <p href="/service">Gift Cards</p>
            <p href="/contact">About</p>
          </div>
        </div>
        <div className="contains-toggle-and-icons-for-nav">
          <div className="contains-icons-for-nav">
            <img
              style={{ height: '1.1em', width: '1.1em' }}
              src={bag}
              alt=""
              srcset=""
            />
            <img
              style={{ height: '1.1em', width: '1.1em' }}
              src={profile}
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudioNav
