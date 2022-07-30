import React from "react";
import "./ExploreMoreCard.css";

const ExploreMoreCard = (props) => {
  return (
    <>
      <div className="cards-for-explore-more-and-read-more-about-us">
        <div className="explore-more-cards-container">
          <div className="explore-more-card-for-selection">
            <div className="image-of-the-product-details">
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

          <div className="bottom-section-about-products-details">
            <div className="blog-text-and-image-for-save-the-product">
              <p>BLOG</p>
              <img
                className="image-for-save-the-product"
                style={{
                  height: "13px",
                  width: "13px",
                }}
                src="https://cdn-icons.flaticon.com/png/128/5662/premium/5662990.png?token=exp=1658923259~hmac=95ef7edb900df8197ad909157f33dc64"
                alt=""
                srcset=""
              />
            </div>
            <div className="pet-treats-text-for-selection">
              <p>{props.cardDetail.title}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreMoreCard;
