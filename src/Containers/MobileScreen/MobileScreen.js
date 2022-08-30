import React from "react";
import "./MobileScreen.css";
import coverimgmobile from "../../Assets/MobileScreen/heading-mobile-cover.webp";
import coverimgmobile2 from "../../Assets/MobileScreen/heading-mobile-cover-2.webp";
import MobileScreenCategory from "../../Components/MobileScreenCategory/MobileScreenCategory";
import seaimg from "../../Assets/CategoryMobileScreen/water.svg";
import categoryimg from "../../Assets/CategoryMobileScreenimg/firstimg.webp";
import mobilephoneimg from "../../Assets/CategoryMobileScreenimg/mobile-phone-img.webp";
import coverimglearnmore from "../../Assets/CategoryMobileScreenimg/cover-img-learn-more.svg";
import MobileScreenImgCategory from "../../Components/MobileScreenImgCategory/MobileScreenImgCategory";
import checked from "../../Assets/MobileScreen/check.png";
import forteam from "../../Assets/CategoryMobileScreenimg/for-team-img.webp";
const MobilePhone = () => {
  return (
    <>
      {/* mobile phone component for screen */}
      <div className="div-contains-img-of-mobile-and-text-info">
        <div className="img-section-in-phone">
          <img src={mobilephoneimg} alt="" srcset="" />
        </div>
        <div className="text-and-info">
          <h3>Lorem ipsum</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            quas ducimus provident itaque,
          </p>
        </div>
      </div>
    </>
  );
};
const MobileScreen = () => {
  const product = [
    {
      _id: "1",
      title: "Amazing views",
      url: seaimg,
      counter: "27,000",
    },
    {
      _id: "1",
      title: "Amazing views",
      url: seaimg,
      counter: "27,000",
    },
    {
      _id: "1",
      title: "Amazing views",
      url: seaimg,
      counter: "27,000",
    },
    {
      _id: "1",
      title: "Amazing views",
      url: seaimg,
      counter: "27,000",
    },
    {
      _id: "1",
      title: "Amazing views",
      url: seaimg,
      counter: "27,000",
    },
    {
      _id: "1",
      title: "Amazing views",
      url: seaimg,
      counter: "27,000",
    },
    {
      _id: "1",
      title: "Amazing views",
      url: seaimg,
      counter: "27,000",
    },
    {
      _id: "1",
      title: "Amazing views",
      url: seaimg,
      counter: "27,000",
    },
    {
      _id: "1",
      title: "Amazing views",
      url: seaimg,
      counter: "27,000",
    },
    {
      _id: "1",
      title: "Amazing views",
      url: seaimg,
      counter: "27,000",
    },
  ];
  const images = [
    {
      _id: "1",
      title: "Lorem",
      url: categoryimg,
      name: "lorem",
    },
    {
      _id: "1",
      title: "Lorem",
      url: categoryimg,
      name: "lorem",
    },
    {
      _id: "1",
      title: "Lorem",
      url: categoryimg,
      name: "lorem",
    },
    {
      _id: "1",
      title: "Lorem",
      url: categoryimg,
      name: "lorem",
    },
    {
      _id: "1",
      title: "Lorem",
      url: categoryimg,
      name: "lorem",
    },
    {
      _id: "1",
      title: "Lorem",
      url: categoryimg,
      name: "lorem",
    },
    {
      _id: "1",
      title: "Lorem",
      url: categoryimg,
      name: "lorem",
    },
    {
      _id: "1",
      title: "Lorem",
      url: categoryimg,
      name: "lorem",
    },
  ];
  return (
    <>
      {/* contains mobile screen section code for Shopisthan.com */}
      {/* flex div for all the content  */}
      <div className="flex-container-for-heading-and-img-section">
        {/* header section */}
        <div className="header-content-for-section">
          <h2>Shopisthan 2022</h2>
          <h3>May Release</h3>

          <h2>A new Airbnb for a new world of travel</h2>
          <button type="submit">Play the film</button>
        </div>
        {/* image for heading section mobile screen */}
        <div className="img-for-mobile-view-heading-section">
          <img src={coverimgmobile} alt="" srcset="" />
        </div>
        {/* paragraph after the heading image section */}
        <div className="paragraph-after-img-section">
          {/* width set for paragraph section */}
          <div className="width-for-para">
            <p>
              People are more flexible than ever about where and when they
              travel. To help them take advantage of these new possibilities,
              we’re introducing our biggest change in a decade – including a
              completely new way to search, a better way to stay longer and an
              unmatched level of protection.
            </p>
            <hr />
          </div>
        </div>
      </div>
      {/* flex container for second img section part and the content */}
      <div className="flex-container-for-the-screen-content">
        {/* width set for sectond image and info section */}

        <div className="width-set-for-another-img-section">
          {/* contain header and img */}
          <div className="container-header-and-img-second-section">
            <div className="header-content-for-second-section">
              <h2>A new way to search</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                quis quo quos facere, nihil, ullam fuga eligendi commodi rerum,
                veritatis velit asperiores! Similique eum minus ut quidem
                voluptates error ipsa.
              </p>
            </div>
            <div className="img-for-mobile-view-heading-second-section">
              <img src={coverimgmobile2} alt="cover img" />
            </div>
          </div>
        </div>
      </div>
      {/* categories section in Shopisthan.com */}
      <div className="flex-container-category-section">
        <div className="wid-set-for-category-component">
          <div className="category-section-for-the-screen">
            <div className="header-content-for-category-section">
              <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                quis quo quos facere, nihil, ullam fuga eligendi commodi rerum,
                veritatis velit asperiores! Similique eum minus ut quidem
                voluptates error ipsa.
              </p>
            </div>
          </div>
          <div className="compoent-mobile-screen-category">
            {product.map((val, index) => (
              <MobileScreenCategory productDetails={val} />
            ))}
          </div>
        </div>
      </div>
      {/* image categories section in Shopisthan.com */}
      <div className="flex-container-category-img-section">
        <div className="wid-set-for-category-img-component">
          <div className="container-for-img-category-and-info">
            <div className="img-category-section-for-the-screen">
              <div className="header-content-for-img-category-section">
                <h2>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                  quis quo quos facere, nihil, ullam fuga eligendi commodi
                  rerum, veritatis velit asperiores! Similique eum minus ut
                  quidem voluptates error ipsa.
                </p>
              </div>
            </div>
            <div className="compoent-mobile-screen--img-category">
              {images.map((val, index) => (
                <MobileScreenImgCategory imgDetails={val} />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Phone image section in Shopisthan.com */}
      <div className="flex-container-category-phone-section">
        <div className="wid-set-for-category-phone-component">
          <div className="container-for-img-category-and-info">
            <div className="phone-category-section-for-the-screen">
              <div className="phone-header-content-for-img-category-section">
                <h2>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                  quis quo quos facere, nihil, ullam fuga eligendi commodi
                  rerum, veritatis velit asperiores! Similique eum minus ut
                  quidem voluptates error ipsa.
                </p>
              </div>
            </div>
            <div className="heading-for-mobile-phone-compo">
              <h2>A better way to stay longer</h2>
            </div>
            <div className="compoent-mobile-screen-phone">
              <MobilePhone />
              <MobilePhone />
            </div>
            <div className="heading-for-mobile-phone-compo-second">
              <h2>One seamless experience</h2>
            </div>
            <div className="compoent-mobile-screen-phone-second">
              <MobilePhone />
              <MobilePhone />
              <MobilePhone />
            </div>
          </div>
          <hr />
        </div>
      </div>

      {/* learn more section */}
      <div className="flex-container-for-heading-and-img-section-learn-more">
        <div className="width-set-for-learn-more">
          {/* header section */}
          <div className="header-content-for-section-learn-more">
            <h2>An unmatched level of protection</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
              eum inventore exercitationem repellendus quas. Deleniti nesciunt
              amet officia dolores vitae id numquam culpa a illum? Eveniet,
              officiis! Inventore, distinctio iusto!
            </p>
            <button type="submit">Learn more</button>
          </div>
          <div className="cover-image-for-the-learn-more-section">
            <img src={coverimglearnmore} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam odio
              ullam commodi corporis, nobis accusantium voluptatem voluptatum
              totam placeat maxime quia expedita enim, neque est deserunt error,
              a maiores vero!
            </p>
          </div>

          {/* guest protection section */}
          <div className="container-for-guest-protection-section">
            <div className="header-for-guest-protection">
              <h1>Provides four protections for every guest on every stay</h1>
            </div>
            {/* info and title section after heading */}
            <div className="headings-and-title-info-for-the-section">
              <div className="title-and-info-for-protection-guest">
                <h2>Booking Protection Guarantee</h2>
                <p>
                  In the unlikely event a Host needs to cancel a booking within
                  30 days of check-in, we’ll find guests a similar or better
                  home, or we’ll refund them.
                </p>
                <hr />
              </div>{" "}
              <div className="title-and-info-for-protection-guest">
                <h2>Booking Protection Guarantee</h2>
                <p>
                  In the unlikely event a Host needs to cancel a booking within
                  30 days of check-in, we’ll find guests a similar or better
                  home, or we’ll refund them.
                </p>
                <hr />
              </div>
            </div>
            <div className="headings-and-title-info-for-the-section">
              <div className="title-and-info-for-protection-guest">
                <h2>Booking Protection Guarantee</h2>
                <p>
                  In the unlikely event a Host needs to cancel a booking within
                  30 days of check-in, we’ll find guests a similar or better
                  home, or we’ll refund them.
                </p>
                <hr />
              </div>{" "}
              <div className="title-and-info-for-protection-guest">
                <h2>Booking Protection Guarantee</h2>
                <p>
                  In the unlikely event a Host needs to cancel a booking within
                  30 days of check-in, we’ll find guests a similar or better
                  home, or we’ll refund them.
                </p>
                <hr />
              </div>
            </div>
          </div>

          {/* all benefits section in shopisthan */}
          <div className="div-for-heading-and-benefit-section">
            <div className="header-for-benefit-section">
              <h2> Only Shopisthan gives every guest</h2>
            </div>
            <div className="contain-all-benefit-titles-and-availability">
              <div className="titles-for-cross-and-checked">
                <p>Shopisthan</p>
                <p>Competitors</p>
              </div>
              <div className="booking-protection-gurantee">
                <h2>Booking Protection Guarantee</h2>
                <div className="imgs-cross-and-check">
                  <img src={checked} alt="checked" srcset="" />
                  <img
                    src="https://t3.ftcdn.net/jpg/04/79/14/82/240_F_479148229_vBFBhDUyLmjlXKJOd4cTUHnm8Rhqe5Ec.jpg"
                    alt="cross"
                    srcset=""
                  />
                </div>
              </div>
              <div className="booking-protection-gurantee">
                <h2>Check-In Guarantee</h2>
                <div className="imgs-cross-and-check">
                  <img src={checked} alt="checked" srcset="" />
                  <img
                    src="https://t3.ftcdn.net/jpg/04/79/14/82/240_F_479148229_vBFBhDUyLmjlXKJOd4cTUHnm8Rhqe5Ec.jpg"
                    alt="cross"
                    srcset=""
                  />
                </div>
              </div>
              <div className="booking-protection-gurantee">
                <h2>Check-In Guarantee</h2>
                <div className="imgs-cross-and-check">
                  <img src={checked} alt="checked" srcset="" />
                  <img
                    src="https://t3.ftcdn.net/jpg/04/79/14/82/240_F_479148229_vBFBhDUyLmjlXKJOd4cTUHnm8Rhqe5Ec.jpg"
                    alt="cross"
                    srcset=""
                  />
                </div>
              </div>
              <div className="booking-protection-gurantee">
                <h2>24-hour Safety Line</h2>
                <div className="imgs-cross-and-check">
                  <img src={checked} alt="checked" srcset="" />
                  <img
                    src="https://t3.ftcdn.net/jpg/04/79/14/82/240_F_479148229_vBFBhDUyLmjlXKJOd4cTUHnm8Rhqe5Ec.jpg"
                    alt="cross"
                    srcset=""
                  />
                </div>
              </div>
            </div>
          </div>

          {/* image and paragraph section after benefits section */}

          <div className="img-and-info-about-the-team">
            <div className="image-section-for-bottom-section">
              <img src={forteam} alt="" srcset="" />
            </div>
            <div className="text-section-for-bottom-section">
              <h1>
                A specially trained, dedicated team ready to make it right
              </h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Corrupti asperiores quos eos, repellat nesciunt similique?
                Expedita, fugit quia velit iure aspernatur eaque mollitia
                corporis soluta omnis ipsa consequuntur deserunt laborum?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileScreen;
