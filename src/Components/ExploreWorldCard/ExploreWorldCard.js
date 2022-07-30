import React from "react";
import "./ExploreWorldCard.css";

const ExploreWorldCard = (props) => {
  return (
    <>
      <div className="containing-all-cards-in-explorer">
        <div className="info-explorer-cards">
          <div className="card-containing-info-and-learn-more">
            <div className="containing-currency-icon">
              <img
                style={{ height: "25px", width: "25px" }}
                src={props.cardDetail.url}
                alt=""
                srcset=""
              />
            </div>
            <div className="containing-header-after-currency-icon">
              <h1>{props.cardDetail.name}</h1>
            </div>
            <div className="para-after-heading-part">
              <p>{props.cardDetail.para_text}</p>
            </div>
            <div className="learn-more-link">
              <p>Learn More -</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreWorldCard;
