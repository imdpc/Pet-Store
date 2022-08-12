import React, { useState } from "react";
import "./PrestigeNav.css";
import searchpng from "../../Assets/Navbar img/search-interface-symbol.png";
// import profilepng from "../../Assets/Navbar img/user.png";
import bagspng from "../../Assets/Navbar img/bag.png";

const PrestigeNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="Prestige-Navbar">
        <div
          className={`nav-toggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="bar"></div>
        </div>
        <div className="header-text-and-nav-items">
          <div className={`nav-items-for-prestige-navbar ${isOpen && "open"}`}>
            <p href="/home">SHOP</p>
          </div>
        </div>
        <span className="nav-logo-for-prestige-navbar">
          <p>Mi Store</p>
        </span>
        <div className="contains-toggle-and-icons-for-nav">
          <div className="contains-icons-for-nav">
            <p>Account</p>
            <p>Search</p>
            <p>Cart (0)</p>
          </div>
        </div>
        <div className="contains-icons-in-resposive">
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
        </div>
      </div>
    </>
  );
};

export default PrestigeNav;
