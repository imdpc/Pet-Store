import React from "react";
import "./CaseStudyComponent.css";
// import bgimg from "../../Assets/CaseStudyComponent/CaseStudyImg-1.jpg";
const CaseStudyComponent = (props) => {
  return (
    <>
      {/* Component for case study that we are using in CaseStudyContainer */}
      {/* flex div for all content */}
      {/* <div className="flex-div-container-for-case-study"> */}
      {/* width set for component */}
      {/* <div className="width-set-case-study-component"> */}
      <div className="information-for-component">
        <h3>{props.title}</h3>
        <h1>{props.heading}</h1>
        <p>{props.info}</p>
        <button type="submit">Show More</button>
      </div>
      {/* </div> */}
      {/* </div> */}
    </>
  );
};

export default CaseStudyComponent;
