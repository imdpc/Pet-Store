import React from 'react'

const DawnNav = () => {
  return (
    <div className="DAWN-Navbar">
            <span className="nav-logo-for-dawn-navbar">Pet Shop</span>
            <div className={`nav-items ${isOpen && "open"}`}>
                <a href="/home">Home</a>
                <a href="/about">Shop</a>
                <a href="/service">About</a>
                <a href="/contact">Contact</a>
            </div>
            <div
                className={`nav-toggle ${isOpen && "open"}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="bar"></div>
            </div>
        </div>
  )
}

export default DawnNav