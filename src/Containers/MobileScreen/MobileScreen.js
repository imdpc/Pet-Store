import React from "react";
import "./MobileScreen.css";
import coverimgmobile from "../../Assets/MobileScreen/heading-mobile-cover.webp";
import coverimgmobile2 from "../../Assets/MobileScreen/heading-mobile-cover-2.webp";

const MobileScreen = () => {
  return (
    <>
      {/* contains mobile screen section code for Shopisthan.com */}
      {/* flex div for all the content  */}
      <div className="flex-container-for-heading-and-img-section">
        {/* header section */}
        <div className="header-content-for-section">
          <h2>Shopisthan 2022</h2>
          <h3>May Release</h3>

          <h2>A new Airbnb for a new world of travel</h2>
          <button type="submit">Play the film</button>
        </div>
        {/* image for heading section mobile screen */}
        <div className="img-for-mobile-view-heading-section">
          <img src={coverimgmobile} alt="" srcset="" />
        </div>
        {/* paragraph after the heading image section */}
        <div className="paragraph-after-img-section">
          {/* width set for paragraph section */}
          <div className="width-for-para">
            <p>
              People are more flexible than ever about where and when they
              travel. To help them take advantage of these new possibilities,
              we’re introducing our biggest change in a decade – including a
              completely new way to search, a better way to stay longer and an
              unmatched level of protection.
            </p>
            <hr />
          </div>
        </div>
      </div>
      {/* flex container for second img section part and the content */}
      <div className="flex-container-for-the-screen-content">
        {/* width set for sectond image and info section */}

        <div className="width-set-for-another-img-section">
          {/* contain header and img */}
          <div className="container-header-and-img-second-section">
            <div className="header-content-for-second-section">
              <h2>A new way to search</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                quis quo quos facere, nihil, ullam fuga eligendi commodi rerum,
                veritatis velit asperiores! Similique eum minus ut quidem
                voluptates error ipsa.
              </p>
            </div>
            <div className="img-for-mobile-view-heading-second-section">
              <img src={coverimgmobile2} alt="cover img" />
            </div>
          </div>
          {/* categories section in Shopisthan.com */}
          <div className="category-section-for-the-screen">
            <div className="header-content-for-category-section">
              <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                quis quo quos facere, nihil, ullam fuga eligendi commodi rerum,
                veritatis velit asperiores! Similique eum minus ut quidem
                voluptates error ipsa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileScreen;
