import React from "react";
import "./DownloadableScreen.css";
import backarrow from "../../Assets/Downloadables/left.png";
import downloadimg1 from "../../Assets/Downloadables/downloadableimg-1.png";
import quoteimg from "../../Assets/Downloadables/quote-img.jpg";

import DownloadableCard from "../../Components/DownloadableCard/DownloadableCard";

const DownloadableScreen = () => {
  const details = [
    {
      _id: "1",
      url: downloadimg1,
      title:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam ipsam quia nesciunt!",
    },
    {
      _id: "2",
      url: downloadimg1,
      title:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam ipsam quia nesciunt!",
    },
    {
      _id: "3",
      url: downloadimg1,
      title:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam ipsam quia nesciunt!",
    },
    {
      _id: "4",
      url: downloadimg1,
      title:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam ipsam quia nesciunt!",
    },
    {
      _id: "5",
      url: downloadimg1,
      title:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam ipsam quia nesciunt!",
    },
    {
      _id: "6",
      url: downloadimg1,
      title:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam ipsam quia nesciunt!",
    },
    {
      _id: "7",
      url: downloadimg1,
      title:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam ipsam quia nesciunt!",
    },
    {
      _id: "8",
      url: downloadimg1,
      title:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam ipsam quia nesciunt!",
    },
  ];
  return (
    <>
      {/* screen for downloadable component cards and some information */}
      {/* also call the DownloadableCard component in this section */}

      {/* flec container for the section */}
      <div className="flex-container-for-screen-downloadable">
        {/* width set for the screen */}

        <div className="width-set-for-the-screen">
          {/* first section in the screen */}
          <div className="back-button-text-and-search-on-blog-input-field">
            <div className="back-btn-and-text">
              <div className="back-arrow-for-header">
                <div className="back-arrow-img">
                  {" "}
                  <img src={backarrow} alt="" srcset="" />
                </div>
                <div className="to-blog-home-page-text">
                  <p>TO Blog Home Page</p>
                </div>
              </div>
              <div className="input-field-for-header">
                <input
                  type="search"
                  placeholder="Search On Blog"
                  name="d"
                  id=""
                />
              </div>
            </div>
          </div>
          {/* container contains our DownloadableCard component */}
          <div className="heading-for-downloadables-and-paragraph-after-heading">
            <h1>Downloadables</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
              explicabo dignissimos dolore praesentium beatae cupiditate.
            </p>
          </div>
          <div className="contains-downloadable-component-card">
            {details.map((val, index) => (
              <DownloadableCard cardDetail={val} />
            ))}
          </div>

          {/* loadmore button */}
          <div className="load-more-button-for-screen">
            <button type="submit">Load More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DownloadableScreen;
