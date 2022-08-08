import React from "react";
import "./AboutStoresComponent.css";
const AboutStoresComponent = (props) => {
  return (
    <div className="containing-two-main-cards-for-discount-info">
      <div className="image-for-discount-section">
        <img
          style={{ width: "100%" }}
          src={props.storeDetails.url}
          alt=""
          srcset=""
        />
      </div>
      <div className="contain-heading-para-text-and-button">
        <div className="for-discount-range-info">
          <p>{props.storeDetails.city}</p>
        </div>
        <div className="some-text-after-discount-heading">
          <p>{props.storeDetails.address}</p>
        </div>
        <div className="button-for-claiming-discount">
          <p>
            <u>Get directions</u>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutStoresComponent;
