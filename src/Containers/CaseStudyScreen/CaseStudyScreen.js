import React from "react";
import "./CaseStudyScreen.css";
import CaseStudyComponent from "./../../Components/CaseStudyComponent/CaseStudyComponent";
// import bgimg from "../../Assets/CaseStudyComponent/CaseStudyImg-1.jpg";

const CaseStudyScreen = () => {
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
          <div className="section-for-all-content">
            <div className="div-contains-all-components-case-study-1">
              <div className="content-for-the-img-1">
                <CaseStudyComponent
                  title="BEST CHICKEN & MEATS"
                  heading="Always the Best."
                  info="Brand Positioning, Design and Store Styling for a new chain of meat stores in India from Indonesian multinational JAPFA."
                />
              </div>
            </div>
            <div className="div-contains-all-components-case-study-2">
              <div className="content-for-the-img-2">
                <CaseStudyComponent
                  title="BEST CHICKEN & MEATS"
                  heading="Always the Best."
                  info="Brand Positioning, Design and Store Styling for a new chain of meat stores in India from Indonesian multinational JAPFA."
                />
              </div>
            </div>
            <div className="div-contains-all-components-case-study-3">
              <div className="content-for-the-img-3">
                <CaseStudyComponent
                  title="BEST CHICKEN & MEATS"
                  heading="Always the Best."
                  info="Brand Positioning, Design and Store Styling for a new chain of meat stores in India from Indonesian multinational JAPFA."
                />
              </div>
            </div>
            <div className="div-contains-all-components-case-study-4">
              <div className="content-for-the-img-4">
                <CaseStudyComponent
                  title="BEST CHICKEN & MEATS"
                  heading="Always the Best."
                  info="Brand Positioning, Design and Store Styling for a new chain of meat stores in India from Indonesian multinational JAPFA."
                />
              </div>
            </div>
            <div className="div-contains-all-components-case-study-5">
              <div className="content-for-the-img-5">
                <CaseStudyComponent
                  title="BEST CHICKEN & MEATS"
                  heading="Always the Best."
                  info="Brand Positioning, Design and Store Styling for a new chain of meat stores in India from Indonesian multinational JAPFA."
                />
              </div>
            </div>
            <div className="div-contains-all-components-case-study-6">
              <div className="content-for-the-img-6">
                <CaseStudyComponent
                  title="BEST CHICKEN & MEATS"
                  heading="Always the Best."
                  info="Brand Positioning, Design and Store Styling for a new chain of meat stores in India from Indonesian multinational JAPFA."
                />
              </div>
            </div>
            <div className="div-contains-all-components-case-study-7">
              <div className="content-for-the-img-7">
                <CaseStudyComponent
                  title="BEST CHICKEN & MEATS"
                  heading="Always the Best."
                  info="Brand Positioning, Design and Store Styling for a new chain of meat stores in India from Indonesian multinational JAPFA."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudyScreen;
