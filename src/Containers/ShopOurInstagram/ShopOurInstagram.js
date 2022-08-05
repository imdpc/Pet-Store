import React from "react";
import "./ShopOurInstagram.css";
import uparrow from "../../Assets/right-corner.png"
const ShopOurInstagram = () => {
  return (
    <>
      <div className="main-container-insta-cards">
        <div className="wid-for-cards">
          <div className="heading-section-shop-our-insta-and-waggpetfood">
            <div className="heading-tag-for-shop-our-instgram">
              <div className="header-text-insta-shop">
                {/* Heading for instagram shop  */}
                <p>Shop our Instagram</p>
              </div>
              <div className="follow-us-text-insta-shop">
                <p>Follow us on Instagram for a daily dose of magic.</p>
              </div>
            </div>
            <div className="waggpet-food-text-and-image">
              <div className="image-contain-arrow-right">
                {/* image for right arrow in headding section  */}
                <img
                  src={uparrow}
                  alt=""
                  srcset=""
                />
              </div>
              <div className="wag-pet-food-sub-heading">
                <p>Waggpetfood</p>
              </div>
            </div>
          </div>
          {/* Images in the card for insta section  */}
          <div className="contain-all-insta-images">
            <div className="card-for-insta-image-1">
              <img
                src="https://i.pinimg.com/originals/29/ac/4b/29ac4bfe86592796754892a453ab6b79.jpg"
                alt=""
              />
              {/* <div className="overlay">
                <a href="http://" className="icon">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/1077/1077042.png"

                  />
                </a>
              </div> */}
            </div>
            <div className="card-for-insta-image-2">
              <img
                src="https://i.pinimg.com/originals/29/ac/4b/29ac4bfe86592796754892a453ab6b79.jpg"
                alt=""
              />
            </div>
            <div className="card-for-insta-image-3">
              <img
                src="https://i.pinimg.com/originals/29/ac/4b/29ac4bfe86592796754892a453ab6b79.jpg"
                alt=""
              />
            </div>
            <div className="card-for-insta-image-4">
              <img
                src="https://i.pinimg.com/originals/29/ac/4b/29ac4bfe86592796754892a453ab6b79.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopOurInstagram;
