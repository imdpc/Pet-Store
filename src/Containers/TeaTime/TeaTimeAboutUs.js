import React from "react";
import "./TeaTimeAboutUs.css";
import bannerimg from "../../Assets/img/banner-img-for-about-us";
import blackteaimg from "../../Assets/img/black-tea-img";
import founderimg from "../../Assets/img/profile-img-founder";
import profileimg1 from "../../Assets/img/profile-img-1";
import aboutusimg from "../../Assets/img/aboutusimag.png";

const TeaTimeAboutUs = () => {
  const ProfileCard = () => {
    return (
      <>
        {/* card component for profiles */}
        <div className="main-card-for-profiles">
          <div className="img-for-profile">
            <img src={profileimg1} alt="" srcset="" />
          </div>
          <div className="name-of-the-profile">
            <p>Prasad</p>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      {/* container for about us page */}

      {/* banner img for about us page */}

      <div className="img-for-about-us-page">
        <img src={bannerimg} alt="" srcset="" />
      </div>
      {/* flex main div for single page content */}
      <div className="main-flex-container-for-about-us">
        {/* width set for page */}
        <div className="width-set-for-page">
          {/* About us section */}
          <div className="about-us-section">
            {/* heading for about us */}
            <div className="heading-about-us-section">
              <p>About Us</p>
            </div>
            {/* section after heading section */}
            <div className="contains-information-and-img-after-about-us">
              {/* our vision */}
              <div className="about-us-info-left">
                <div className="info-left-section">
                  <p>
                    We believe, the careful the selection, the tastier the tea
                  </p>
                  <p>
                    we source our tea leaves from north India’s tier-1 gardens
                  </p>{" "}
                  <p>
                    Zero artificial flavors to enhance the real taste of desi
                    tea
                  </p>
                  <p>Brewed to perfection so you can enjoy & unwind</p>
                </div>
              </div>
              {/* image section in btween our left and right section */}
              <div className="img-in-btwn-our-left-right-info">
                <div className="img-for-about-us">
                  <img src={aboutusimg} alt="" srcset="" />
                </div>
              </div>
              {/* about us info right section */}
              <div className="about-us-info-right">
                <div className="info-right-section">
                  <p>
                    Hand pounded ginger from local produce to give you the ” Maa
                    ke haath ki Ghar waali Kadak chai”
                  </p>
                  <p>
                    Prepared by our expert chefs in the most hygienic conditions
                    since safety is our priority
                  </p>{" "}
                  <p>
                    We use Fresh milk and RO purified water.Quality is the heart
                    of our family.
                  </p>
                  <p>
                    100% Sulphur free sugar is used in every cup because we
                    value your health.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* our vision and our mission section with image */}
          <div className="our-vision-and-our-mission-section">
            {/* our vision */}
            <div className="our-vision-section">
              {/* heading */}
              <div className="heading-our-vision">
                <p>OUR VISION</p>
              </div>
              <div className="para-our-vision">
                <p>
                  We are here to bring the numero uno tea experience that Tea
                  Time gives to as many villages, towns, cities and countries as
                  we can, while building sustainable growth for farmers and
                  empowering local Entrepreneurship. We know the tea that
                  Indians love, thats the taste we built.
                </p>
              </div>
            </div>
            {/* image section in btween our-vision & our mission section */}
            <div className="img-in-btwn-our-mission-and-our-vision-section">
              <div className="img-for-section">
                <img src={blackteaimg} alt="" srcset="" />
              </div>
            </div>
            {/* our mission section */}
            <div className="our-vision-section">
              {/* heading */}
              <div className="heading-our-mission">
                <p>OUR MISSION</p>
              </div>
              <div className="para-our-mission">
                <p>
                  We are on mission to add value in the lives of our fast
                  growing community – our customers, farmers, franchisees,
                  employees and our investors. Every cup counts towards bringing
                  joy that’s mutual !
                </p>
              </div>
            </div>
          </div>
          {/* About Founder Section */}
          <div className="contains-info-about-founder">
            <div className="about-founder-heading-and-info">
              {/* header */}
              <div className="header-about-founder">
                <p>About Founder</p>
              </div>
              {/* para for founder information */}
              <div className="info-about-founder-in-details">
                <p>
                  Uday’s vision to empower common class population and
                  determination to bridge the gap that existed in the
                  accessibility and affordability of premium quality product to
                  common people is what led to India’s largest tea chain.
                </p>
                <p>
                  {" "}
                  Tea Time is a product that has reached millions of people and
                  aims to connect more with our very own blends of tea.
                </p>
              </div>
            </div>
            {/* div for founder profile */}
            <div className="founder-img-and-info">
              {/* img of founder */}
              <div className="img-of-founder">
                <img src={founderimg} alt="" srcset="" />
              </div>
              <div className="name-and-working-profile-of-founder">
                {/* name info of founder */}
                <div className="name-of-founder">
                  <p>UDAY SRINIVAS TANGELLA</p>
                </div>
                {/* working details */}
                <div className="working-profile">
                  <p>FOUNDER AND MANAGING DIRECTOR</p>
                </div>
              </div>
            </div>
          </div>
          {/* profile card section in about us page */}
          <div className="heading-and-cards-for-profiles">
            {/* div for heading section */}
            <div className="heading-section-for-profiles">
              <div className="header-meet-our-amazing-team">
                <p>Meet Our Amazing Team</p>
              </div>
              <div className="our-success-heading">
                <p>The Faces Behind Our Success</p>
              </div>
              <div className="dont-wothout-them-header">
                <p>We Couldn’t Do It Without Them</p>
              </div>
            </div>
            {/* div for profile cards */}
            <div className="contains-cards-for-profile">
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeaTimeAboutUs;
