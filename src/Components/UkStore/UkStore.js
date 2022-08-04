import React from "react";
import "./UkStore.css";
import ukimage from "../../Assets/pet-shop-img.png";

const UkStore = () => {
  return (
    <>
      <div
        style={{ display: "flex", gap: "65px" }}
        className="main-display-container-screen-uk-shop"
      >
        <div className="uk-store-sub-div-for-width">
          <div>
            {/* image in the first section */}
            <img src={ukimage} alt="" className="uk-image" />
          </div>
          <div className="descreption-ukstore">
            {/* second section starts */}
            <h2 className="heading-title-ukstore">
              Become The UK's Largest <br />
              Producer Of Dry Food
            </h2>
            <br />
            {/* paragraph after the second section heading  */}
            <p className="para-in-uk-store-after-heading-section">
              Products include foods formulated for adult,working dogs and
              puppies,treats and rewards. The UK's third largest brand by value.
              Wagg Treats the 4th largest and fastest growing treat brand in the
              UK.{" "}
            </p>
            <br />
            <div>
              <ul>
                {/* bullet points in the second section  */}
                <li className="uk-store-key-points">
                  <img
                    className="check-mark-svg"
                    src="https://cdn-icons-png.flaticon.com/512/6459/6459980.png"
                    alt=""
                  />
                  {"   "}
                  <p>Luxurious Skincare Solution</p>
                </li>
                <li className="uk-store-key-points">
                  <img
                    className="check-mark-svg"
                    src="https://cdn-icons-png.flaticon.com/512/6459/6459980.png"
                    alt=""
                  />
                  {"   "}
                  Educating and Empowering
                </li>
                <li className="uk-store-key-points">
                  <img
                    className="check-mark-svg"
                    src="https://cdn-icons-png.flaticon.com/512/6459/6459980.png"
                    alt=""
                  />
                  {"   "}
                  Positive and Transperent Industry.
                </li>
              </ul>
            </div>
            <br />
            {/* button in  second section  */}
            <button type="submit" className="uk-store-btn">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UkStore;
