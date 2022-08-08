import React from "react";
import save from "../../Assets/save-instagram.png"

import "./ExploreMoreCard.css";

const ExploreMoreCard = (props) => {
  return (
    <>
      {/* single component for re use in explore more section */}
      {/* <div className="cards-for-explore-more-and-read-more-about-us"> */}
      <div className="explore-more-cards-container">
        <div className="explore-more-card-for-selection">
          <div className="image-of-the-product-details">
            {/* image of the product in the explore more section. */}
            <img
              style={{
                height: "190px",
                width: "146px",
              }}
              src={props.cardDetail.url}
              alt=""
              srcset=""
            />
          </div>
        </div>

        <div className="bottom-section-about-products-details-explore-more">
          <div className="blog-text-and-image-for-save-the-product">
            <p>BLOG</p>
            {/* image for the save icon  */}
            <img
              className="image-for-save-the-product"
              style={{
                height: "13px",
                width: "13px",
                cursor: "pointer"
              }}
              src={save}
              alt=""
              srcset=""
            />
          </div>
          <div className="pet-treats-text-for-selection">
            <p>{props.cardDetail.title}</p>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default ExploreMoreCard;
