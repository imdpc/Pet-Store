import React, { useState } from 'react'
import Review from '../Review/Review'
import './ReviewRewards.css'


const ReviewRewards = () => {
  // usestate for review display



  return (
    <>
      {/* first review section  */}
      <div className="flex-div-for-review">
        <div className="widith-div-review-rewards">

          <div className="div-for-flex-the-two-div">
            <div className="review-desc">
              <p className="review-heading">REVIEWS & REWARDS</p>
              <p className="customer-count-review">
                Over <span style={{ color: "#124944" }}>80000</span> customers{" "}
                <br />
                with 5 -star reviews
              </p>
              <p className="para-after-review-heading">
                Emma Lewisham is a luxury, science-led natural <br />
                skincare line backed by the highest calibre of green <br />{" "}
                science and the innovation in the industry.{" "}
              </p>
              <div>
                {/* review avtar  */}
                <img
                  className="review-img"
                  src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Virat_Kohli.jpg"
                  alt=""
                />
              </div>
              <p>
                <span className="star-review">&#11088; </span> 4.9{" "}
                <span style={{ color: "gray", fontSize: "13px" }}>
                  (8000 reviews)
                </span>
              </p>
            </div>
            <Review />

          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewRewards;
