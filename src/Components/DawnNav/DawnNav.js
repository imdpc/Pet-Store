import React, { useState } from "react";
import "./DawnNav.css";
import searchpng from "../../Assets/Navbar img/search-interface-symbol.png";
import profilepng from "../../Assets/Navbar img/user.png";
import bagspng from "../../Assets/Navbar img/bag.png";
const DawnNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    // main div flex for DAWN navbar
    <div className="dawn-nav-flex-container">
      <div className="DAWN-Navbar">
        <div
          className={`nav-toggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="bar"></div>
        </div>
        <div className="header-text-and-nav-items">
          <span className="nav-logo-for-dawn-navbar">
            <p>Mi Store</p>
          </span>
          <div className={`nav-items-for-dawn-navbar ${isOpen && "open"}`}>
            <p href="/home">Bags</p>
            <p href="/about">Shoes</p>
            <p href="/service">Lookbook</p>
            <p href="/contact">All products</p>
          </div>
        </div>
        <div className="contains-toggle-and-icons-for-nav">
          <div className="contains-icons-for-nav">
            <img
              style={{ height: "1.1em", width: "1.1em" }}
              src={searchpng}
              alt=""
              srcset=""
            />
            <img
              style={{ height: "1.1em", width: "1.1em" }}
              src={bagspng}
              alt=""
              srcset=""
            />
            <img
              style={{ height: "1.1em", width: "1.1em" }}
              src={profilepng}
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DawnNav;
