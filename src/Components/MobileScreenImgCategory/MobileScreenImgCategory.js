import React from "react";
import "./MobileScreenImgCategory.css";
const MobileScreenImgCategory = (props) => {
  return (
    <>
      {/* category component for Mobile Screen */}
      <div className="contains-card-for-MobileScreenCategory-img">
        <div className="icon-for-categories-in-mobile-screen-img">
          <img src={props.imgDetails.url} alt="" srcset="" />
        </div>
        <div className="title-and-counts-of-products-img">
          <h2>{props.imgDetails.title}</h2>
          <p>{props.imgDetails.name}</p>
        </div>
      </div>
    </>
  );
};

export default MobileScreenImgCategory;
