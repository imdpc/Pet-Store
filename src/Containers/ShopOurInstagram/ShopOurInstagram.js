import React from "react";
import "./ShopOurInstagram.css";
import rightar from "../../Assets/right.svg";
const ShopOurInstagram = () => {
  return (
    <>
      <div className="main-container-insta-cards">
        <div className="heading-section-shop-our-insta-and-waggpetfood">
          <div className="heading-tag-for-shop-our-instgram">
            <div className="header-text-insta-shop">
              <p>header-text-insta-shop</p>
            </div>
            <div className="follow-us-text-insta-shop">
              <p>Follow us on Instagram for a daily dose of magic.</p>
            </div>
          </div>
          <div className="waggpet-food-text-and-image">
            <div className="image-contain-arrow-right">
              <img
                src="https://cdn-icons.flaticon.com/png/128/5611/premium/5611889.png?token=exp=1659011817~hmac=b5f39d32bc5731370969af0f087f802d"
                alt=""
                srcset=""
              />
            </div>
            <div>
              <p>Waggpetfood</p>
            </div>
          </div>
        </div>

        <div className="card-for-insta-image">
          <img alt="" />
        </div>
      </div>
    </>
  );
};

export default ShopOurInstagram;
