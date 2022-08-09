import React, { useState } from "react";
import "./Nav.css"

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="Navbar">
            <span className="nav-logo">Pet Shop</span>
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
    );
};

export default Nav