import React from "react";
import "./CaseStudyComponent.css";
// import bgimg from "../../Assets/CaseStudyComponent/CaseStudyImg-1.jpg";
const CaseStudyComponent = (props) => {
  return (
    <>
      {/* Component for case study that we are using in CaseStudyContainer */}
      {/* flex div for all content */}
      <div className="flex-div-container-for-case-study">
        {/* width set for component */}
        <div
          className="image-set-case-study-components"
          style={{
            backgroundImage: `url(${props.CSSDetail.url})`,
            backgroundrepeat: "no-repeat",
            backgroundsize: "cover",
            display: "flex",
            alignitems: "center",
            opacity: "5",
            justifycontent: "center",
            height: "24em",
            backgroundposition: "fixed",
          }}
        >
          <div className="information-for-component">
            <h3>{props.CSSDetail.title}</h3>
            <h1>{props.CSSDetail.heading}</h1>
            <p>{props.CSSDetail.info}</p>
            <button type="submit">Show More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudyComponent;
