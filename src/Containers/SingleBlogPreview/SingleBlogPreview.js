import React from "react";
import "./SingleBlogPreview.css";

const SingleBlogPreview = () => {
  return (
    <>
      {/* contains single blog preview */}
      {/* div for flex container it contains details about a single blog */}
      <div className="flex-container-for-single-preview-blog">
        {/* div for specific width */}
        <div
          style={{ width: "75em" }}
          className="75em-width-for-the-blog-screen-page"
        >
          {/* div for heading of the Signle blog */}
          <div className="heading-of-the-single-blog">
            <h1>How to Diagnose Potential Clients’ Problems</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlogPreview;
