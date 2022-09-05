import React from "react";
import "./MobileScreenCategory.css"
const MobileScreenCategory = (props) => {
  return (
    <>
      {/* category component for Mobile Screen */}
      <div className="contains-card-for-MobileScreenCategory">
        <div className="icon-for-categories-in-mobile-screen">
          <img src={props.productDetails.url} alt="" srcset="" />
        </div>
        <div className="title-and-counts-of-products">
          <h2>{props.productDetails.title}</h2>
          <p>{props.productDetails.counter}</p>
        </div>
      </div>
    </>
  );
};

export default MobileScreenCategory;
