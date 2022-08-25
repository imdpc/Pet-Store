import React from "react";
import "./CaseStudyScreen.css";
import CaseStudyComponent from "./../../Components/CaseStudyComponent/CaseStudyComponent";
// import bgimg from "../../Assets/CaseStudyComponent/CaseStudyImg-1.jpg";

const CaseStudyScreen = () => {
  // const cssdata = [
  //   {
  //     _id: "1",
  //     title: "BEST CHICKEN & MEATS",
  //     heading: "Always the Best.",
  //     info: "Brand Positioning, Design and Store Styling for a new chain of meat stores in India from Indonesian multinational JAPFA.",
  //     url: bgimg,
  //   },
  //   {
  //     _id: "1",
  //     title: "BEST CHICKEN & MEATS",
  //     heading: "Always the Best.",
  //     info: "Brand Positioning, Design and Store Styling for a new chain of meat stores in India from Indonesian multinational JAPFA.",
  //     url: bgimg,
  //   },

  // ];
  return (
    <>
      {/* contains case study components */}
      {/* flex container for case study components */}
      <div className="flex-container-for-case-study-components">
        {/* width set for case study screen */}
        <div className="width-set-for-case-study-screen">
          {/* header for screen */}
          <div className="header-for-screen-our-work">
            <h1>Our Work</h1>
          </div>
          {/* div for Case Study component */}

          <div className="div-contains-all-components-case-study">
            <div className="content-for-the-img">
              {/* {cssdata.map((val, index) => (
                <CaseStudyComponent CSSDetail={val} />
              ))} */}
              <CaseStudyComponent
                title="BEST CHICKEN & MEATS"
                heading="Always the Best."
                info="Brand Positioning, Design and Store Styling for a new chain of meat stores in India from Indonesian multinational JAPFA."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudyScreen;
