import React, { useState } from 'react'
import './ImpulseNav.css'
import searchicon from '../../Assets/Navbar img/search-interface-symbol.png'
import cart from '../../Assets/Navbar img/bag.png'
import profile from '../../Assets/Navbar img/user.png'

const ImpulseNav = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="ImpulseNavbar">
      <span className="nav-search-icon">
        <img src={searchicon} alt="" className="search-icon-style" />
      </span>
      <div className={`nav-items-for-impulse ${isOpen && 'open'}`}>
        <p href="/home">Home</p>
      </div>
      <div className="cart-profile-icon">
        <div>
          <img src={profile} alt="" className="icon-style" />
        </div>
        <div>
          <img src={cart} alt="" className="icon-style" />
        </div>
      </div>
      <div
        className={`nav-toggle-for-impulse ${isOpen && 'open'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  )
}

export default ImpulseNav
