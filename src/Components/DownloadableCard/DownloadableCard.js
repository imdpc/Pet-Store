import React from "react";
import "./DownloadableCard.css";
import downloadimg1 from "../../Assets/Downloadables/downloadableimg-1.png";
const DownloadableCard = (props) => {
  return (
    <>
      {/* container for downloadable component that we are going to use in downloadable screen  */}
      <div className="container-card-for-downloadable">
        {/* img section in card */}
        <div className="card-img-for-downloadable">
          <img src={props.cardDetail.url} alt="" srcset="" />
        </div>
        {/* text section in card */}
        <div className="info-about-card-in-downloadable">
          <p>{props.cardDetail.title}</p>
        </div>
      </div>
    </>
  );
};

export default DownloadableCard;
