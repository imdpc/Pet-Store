import React from "react";
import search from "../../Assets/loupe.png"
import cart from "../../Assets/shopping-cart.png"
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      {/* nav bar for pet shop */}
      <div className="pet-shop-nav">
        <div className="pet-shop-nav-width-div">
          <div className="navbar-heading">
            <h2 >Pet Store</h2>
          </div>
          <div className="pet-shop-nav-middle-content">
            <ul className="pet-shop-nav-content">
              <li>Home</li>
              <li>Shop</li>
              <li>About</li>
              <li>Contact</li>

            </ul>
          </div>
          <ul className="search-and-cart">
            <li>
              {/* img for the search icon in the navbar  */}
              <img
                src={search}
                alt=""
                className="search-icon-navbar"
              />
            </li>
            <li>
              <img
                src={cart}
                alt=""
                className="search-icon-navbar"
              />
            </li>
            {/* button in the navbar
            <button type="submit" className="contact-us-btn-in-nav">Contact Us</button> */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
