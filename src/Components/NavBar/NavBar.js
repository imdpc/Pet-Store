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
            <h2 >wagg</h2>
          </div>
          <div className="pet-shop-nav-middle-content">
            <ul className="pet-shop-nav-content">
              <li>Dry Foods</li>
              <li>Dog Treats</li>
              <li>Shop</li>
              <li>Blog</li>
              <li>About Us</li>
            </ul>
          </div>
          <ul className="pet-shop-nav-content">
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
            {/* button in the navbar   */}
            <button type="submit" className="contact-us-btn-in-nav">Contact Us</button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
