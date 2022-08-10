import React from "react";
import "./FeaturedIn.css";
import logo1 from "../../Assets/logo1.png"
import logo2 from "../../Assets/logo2-removebg-preview.png"
import logo3 from "../../Assets/logo3-removebg-preview.png"
import logo4 from "../../Assets/logo4-removebg-preview.png"
import logo5 from "../../Assets/logo5.png"
const FeaturedIn = () => {
  return (
    <>
      <div className="main-flex-container-contain-featured-in-icons">
        <div className="featuredin-width-container">
          <div className="featured-in-header-text">
            {/* Feature component heading  */}
            <p style={{ fontFamily: "Acumin Pro" }}>Featured In</p>
          </div>
          <div className="flex-featured-in-icons">
            <div>
              {/* flex  images for the company logo */}
              <img
                //   style={{ height: "120px", width: "230px" }}
                src="https://www.cargill.com/image/1432079742021/cargill-logo-black.jpg"
                alt=""
                srcset=""
              />
            </div>
            <div>
              <img
                //   style={{ height: "120px", width: "230px" }}
                src={logo1}
                alt=""
                srcset=""
              />
            </div>
            <div>
              <img
                //   style={{ height: "120px", width: "230px" }}
                src={logo2}
                alt=""
                srcset=""
              />
            </div>
            <div>
              <img
                //   style={{ height: "120px", width: "230px" }}
                src={logo3}
                alt=""
                srcset=""
              />
            </div>
            <div>
              <img
                //   style={{ height: "120px", width: "230px" }}
                src={logo4}
                alt=""
                srcset=""
              />
            </div>
            <div>
              <img
                //   style={{ height: "120px", width: "230px" }}
                src={logo5}
                alt=""
                srcset=""
              />
            </div>
            <div>
              <img
                //   style={{ height: "120px", width: "230px" }}
                src="https://www.cargill.com/image/1432079742021/cargill-logo-black.jpg"
                alt=""
                srcset=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedIn;
