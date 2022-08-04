import React, { useState } from "react";
import "./ReviewRewards.css";
import greaterthan from "../../Assets/greater-than-symbol.png";
import lessthan from "../../Assets/less-than-symbol.png";

const ReviewRewards = () => {
  // usestate for review display

  const [activeTab, setActiveTab] = useState(0);

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

  return (
    <>
      {/* first review section  */}
      <div className="flex-div-for-review">
        <div className="widith-div-review-rewards">
          <p className="review-heading">REVIEWS & REWARDS</p>

          <div style={{ display: "flex", gap: "250px" }}>
            <div className="review-desc">
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
            <div className="review-cards">
              <div className="customer-review">
                {/* dynamic avtar change */}
                <img
                  className="review-img-top"
                  src={cards[activeTab].imgUrl}
                  alt=""
                />

                {/* review text  */}
                <div className="customer-review-text">
                  {cards[activeTab].title}
                  <br />
                  <br />
                  <div></div>
                  <span className="greater-than-sign-review-card-div">
                    <img
                      className="greater-than-sign-review-card"
                      src={greaterthan}
                      alt=""
                      onClick={() =>
                        setActiveTab(
                          activeTab === cards.length - 1 ? 0 : activeTab + 1
                        )
                      }
                    />
                  </span>
                  <br />
                  <p>
                    <span className="star-review">
                      {/* <img src={cards[activeTab].starsimgUrl}></img> */}
                    </span>{" "}
                  </p>
                  {cards[activeTab].name}

                  <span className="less-than-sign-review-card-div">
                    <img
                      className="less-than-sign-review-card"
                      src={lessthan}
                      alt=""
                      onClick={() =>
                        setActiveTab(
                          activeTab === 0 ? activeTab + 1 : activeTab - 1
                        )
                      }
                    />
                  </span>
                </div>
              </div>
              <div className="background-card"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewRewards;
