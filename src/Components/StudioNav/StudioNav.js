import React, { useState } from 'react'
import './StudioNav.css'
import searchicon from '../../Assets/Navbar img/search-interface-symbol.png'
import cart from '../../Assets/Navbar img/bag.png'
import profile from '../../Assets/Navbar img/user.png'

const StudioNav = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="StudioNavbar">
      <div
        className={`nav-toggle-for-studio ${isOpen && 'open'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
      <span className="nav-search-icon">
        <img src={searchicon} alt="" className="search-icon-style" />
      </span>
      <div className={`nav-items-for-studio ${isOpen && 'open'}`}>
        <p href="/home">Studio</p>
      </div>
      <br />
      {/* <div className="studio-nav-content">
        <p>Prints</p>
        <p>Orignals</p>
        <p>Art Objects</p>
        <p>Shop by Artist</p>
        <p>Gift Cards</p>
        <p>About</p>
      </div> */}

      <div className="cart-profile-icon">
        <div>
          <img src={profile} alt="" className="icon-style" />
        </div>
        <div>
          <img src={cart} alt="" className="icon-style" />
        </div>
      </div>
    </div>
  )
}

export default StudioNav
