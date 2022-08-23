import React from "react";
import "./Franchise.css";
// import bannerimg from "../../Assets/img/Tea-Time-franchise-001.jpg";
import outletimg from "../../Assets/img/Tea-Time-Outlet.jpg";
import Contact from "../../Components/Contact/Contact";
const Franchise = () => {
  return (
    <>
      {/* screen for franchises in our application */}
      {/* banner image for franchise*/}
      {/* img for banner */}
      <div className="banner-img-for-franchise">
        <div className="text-on-bg-image">
          {/* <img src={bannerimg} alt="" srcset="" /> */}
          <h1>Tea Franchise With 3000+ Stores Across India</h1>
        </div>
      </div>
      {/* flex container for franchise screen */}
      <div className="flex-container-for-franchise">
        {/* width set for franchise screen */}

        <div className="width-set-for-franchise-screen">
          {/* code for youtube video and some description for franchise */}
          <div className="info-and-youtube-video-for-franchise">
            {/* info section */}
            <div className="info-for-franchise">
              <div className="heading-for-franchise-info">
                <p>
                  The Best Opportunity To Build Your Own Business With Tea Time
                  Franchise
                </p>
              </div>
              <div className="paragraph-for-franchise-info">
                <p>
                  Our company’s reputation has quickly grown prominently by word
                  of mouth in the tea and health community. Each blend is
                  uniquely crafted to invoke an authentic tea sipping experience
                  and made to satisfy our fondness and love for tea. Find out
                  what keeps our customers happy and coming back for more. Let’s
                  just say that once you’ve tasted the natural goodness, you’ll
                  be proud to give our blends of tea a definite go.
                </p>
              </div>
            </div>
            {/* youtube section */}
            <div className="youtube-video-for-franchise">
              <iframe
                width="550"
                height="309"
                src="https://www.youtube.com/embed/rFEMJ3jfz_E"
                title="Tea Time TVC | The Greatest Tradition of Desi Tea"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      {/* cards for franchise with some information */}
      <div className="flex-continer-full-width">
        {/* cards for franchise with some information */}
        <div className="three-flex-cards-for-franchise-info">
          <div className="first-card-for-outlets">
            <h1>3000+ OUTLETS</h1>
            <p>
              Unit franchises of Tea Time are spread across Andhra Pradesh,
              Telangana, Tamilnadu, Kerala, Maharashtra, Gujarat, Madhya
              Pradesh, Uttar Pradesh, Manipur, Karnataka, Rajasthan,
              Pondicherry, Delhi, Haryana Odisha, Uttarakand, Bihar, West Bengal
              and Nepal. Many other unit franchises are slated to open in other
              parts of India.
            </p>
          </div>
          <div className="second-card-for-investments">
            <h1>LESS INVESTMENT</h1>
            <p>
              A middle-class family also can afford to start the teatime 5 Lakhs
              is the total amount required to start a unit franchise of Tea
              Time. In that franchise fee, We offer marketing and the complete
              start up kit consists of the movable equipment’s (Refrigerator,
              Deep Freezer, Stoves, Utensils etc.) & an initial stock to start
              the business. So, anyone can start this business without
              hesitation’s will be an additional payable amount.
            </p>
          </div>
          <div className="third-card-for-margin">
            <h1>HIGH PROFIT MARGIN</h1>
            <p>
              Profit margin ranges from 40% to 80%. The average payback period
              is from 5 to 10 months. Reasonable product prices start from Rs.12
              (dum tea) to Rs.99 (premium milkshakes).
            </p>
          </div>
        </div>
      </div>

      {/* section for Unit Franchisee Requirements */}
      {/* flex container for Franchisee requirement section */}

      <div className="flex-container-for-franchisee-requirements">
        {/* width set for the section */}
        <div className="width-set-for-section">
          {/* Franchisee requirement details */}
          {/* heading section */}
          <div className="heading-for-unit-franchinsee-req">
            <h2>UNIT FRANCHISEE REQUIREMENTS</h2>
          </div>
          <div className="franchise-requirements-and-cards-contaning-text">
            <div className="div-contains-all-the-cards-for-req">
              {/* img cards for franchisee req */}
              <div className="container-for-first-outlet-card">
                <div className="image-for-outlet-card-in-req">
                  <img src={outletimg} alt="Avatar" className="image" />
                </div>
                <div className="overlay-for-outlet-card">
                  <div className="text-for-outlet-card">
                    <h2>OUTLET</h2>
                    <p>
                      Minimum 100 sqft outlet at a busy location which can be
                      near to bus stops, highways, hospitals, markets, railway
                      stations, IT campus, colleges etc.
                    </p>
                  </div>
                </div>
              </div>{" "}
              <div className="container-for-first-outlet-card">
                <div className="image-for-outlet-card-in-req">
                  <img src={outletimg} alt="Avatar" className="image" />
                </div>
                <div className="overlay-for-outlet-card">
                  <div className="text-for-outlet-card">
                    {" "}
                    <h2>INTERIOR</h2>
                    <p>
                      The outlet should have tile flooring, kitchen partition,
                      water connection & an outlet counter. Franchisee has to
                      arrange the said ones only. The rest of all the brand will
                      take care of.
                    </p>
                  </div>
                </div>
              </div>{" "}
              <div className="container-for-first-outlet-card">
                <div className="image-for-outlet-card-in-req">
                  <img src={outletimg} alt="Avatar" className="image" />
                </div>
                <div className="overlay-for-outlet-card">
                  <div className="text-for-outlet-card">
                    <h2>KITCHEN</h2>
                    <p>
                      Get 2 employees who will be trained by our chef to run
                      your business. Anybody can learn the entire Tea Time menu
                      in 3 days.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* contact us page */}
      {/* flex container */}
      <div className="flex-contact-us">
        <div className="width-contact-us">
          <Contact />
        </div>
      </div>
    </>
  );
};

export default Franchise;
