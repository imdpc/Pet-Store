import React from "react";
import "./ExploreWorld.css";
const ExploreWorld = () => {
  return (
    <>
      <div className="main-heading-in-world-explore">
        Explore Wagg's World <br /> and discover fun
      </div>
      <div className="containing-all-cards-in-explorer">
        <div className="info-explorer-cards-1">
          <div className="card-containing-info-and-learn-more">
            <div className="containing-currency-icon">
              <img
                style={{ height: "25px", width: "25px" }}
                src="https://cdn-icons-png.flaticon.com/128/32/32719.png"
                alt=""
                srcset=""
              />
            </div>
            <div className="containing-header-after-currency-icon">
              <h1>Made In Britain</h1>
            </div>
            <div className="para-after-heading-part">
              <p>
                Personalized caree for dogs in a seperate atrium. Great for
                those who can't play with other dogs,senior or those active.
              </p>
            </div>
            <div className="learn-more-link">
              <p>Learn More -</p>
            </div>
          </div>
        </div>
        <div className="info-explorer-cards-2">
          <div className="card-containing-info-and-learn-more">
            <div className="containing-currency-icon">
              <img
                style={{ height: "25px", width: "25px" }}
                src="https://cdn-icons.flaticon.com/png/128/4803/premium/4803130.png?token=exp=1658906426~hmac=0b5cd1591c7968bb95e8575db46e4b37"
                alt=""
                srcset=""
              />
            </div>
            <div className="containing-header-after-currency-icon">
              <h1>Made By Experts</h1>
            </div>
            <div className="para-after-heading-part">
              <p>
                Half Day includes up to 6 hours of play,socialization & you
                enrichment. Campers also enjoy meeting new friends.
              </p>
            </div>
            <div className="learn-more-link">
              <p>Learn More -</p>
            </div>
          </div>
        </div>
        <div className="info-explorer-cards-3">
          <div className="card-containing-info-and-learn-more">
            <div className="containing-currency-icon">
              <img
                style={{ height: "25px", width: "25px" }}
                src="https://cdn-icons-png.flaticon.com/128/1692/1692130.png"
                alt=""
                srcset=""
              />
            </div>
            <div className="containing-header-after-currency-icon">
              <h1>Love By Dogs</h1>
            </div>
            <div className="para-after-heading-part">
              <p>
                Over the years, we've learned that dogs thrive on routines and
                activities that give them an opportunity to exercise.
              </p>
            </div>
            <div className="learn-more-link">
              <p>Learn More -</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreWorld;
