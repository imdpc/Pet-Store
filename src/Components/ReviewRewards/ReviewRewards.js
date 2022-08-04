<<<<<<< HEAD
import React, { useState } from "react";
import "./ReviewRewards.css";
import greaterthan from "../../Assets/greater-than-symbol.png";
import lessthan from "../../Assets/less-than-symbol.png";
=======
import React, { useState } from 'react'
import Review from '../Review/Review'
import './ReviewRewards.css'

>>>>>>> fa91fd7b380667cefc36bcce5c0a6a1468be45ba

const ReviewRewards = () => {
  // usestate for review display


<<<<<<< HEAD
  const cards = [
    {
      title:
        "Absoloutly love these products! My skins has never felt better. I have used many other brands butthese products are superior!!!",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/7/7e/Virat_Kohli.jpg",
      starsimgUrl: "https://cdn-icons-png.flaticon.com/512/2107/2107957.png ",
      name: "Emma, USA",
    },
    {
      title:
        "Absoloutly love these products! My skins has never felt better. I have used many other brands butthese products are superior!!!",
      imgUrl:
        "https://assets.gqindia.com/photos/5e8485a922867b0008960729/1:1/w_1080,h_1080,c_limit/MS-Dhoni-net-worth.jpg",
      stars: "&#11088;&#11088;&#11088;",
      name: "Prasad, India",
    },
    {
      title:
        "Absoloutly love these products! My skins has never felt better. I have used many other brands butthese products are superior!!!",
      imgUrl:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/322600/322697.png",
      stars: "&#11088;&#11088;&#11088;",
      name: "Akash, India",
    },
  ];
=======
>>>>>>> fa91fd7b380667cefc36bcce5c0a6a1468be45ba

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
