import React from "react";
import "./ResponsiveNav.css";
import backimg from "../../Assets/Navbar img/back.png";
import Home from "../../Containers/Home";
const ResponsiveNav = () => {
  return (
    <>
      {/* contains responsive nav for toggle between responsive view and desktop view */}
      {/* main div for flex */}
      <div
        className="flex-navbar-for-responsive-navbar"
        style={{ padding: "1em 0", borderBottom: "1px solid #80808073" }}
      >
        {/* div for specific width */}
        <div className="width-for-responsive-nav">
          {/* div for containing all the div that holds content */}
          <div className="contains-navbar-content-back-and-button">
            {/* img for back and text back */}
            <div className="img-for-back-and-text">
              {/* img for back png */}
              <div className="img-for-back">
                <img
                  src={backimg}
                  alt="back-img-logo"
                  srcset=""
                  style={{ height: "25px", width: "28px" }}
                />
              </div>
              {/* div for back text */}
              <div className="text-for-backside">
                <p>Back</p>
              </div>
            </div>
            {/* div for try theme button */}
            <div className="contain-try-theme-button">
              <div className="button-for-try-theme">
                {/* button */}
                <button>
                  <p>Try theme</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResponsiveNav;
