import React from "react";
import "./LandingPageMobile .css";
// import all images here
import hadingimg from "../../Assets/Mobile Page/heading-img.jpg";
import qrimg from "../../Assets/Mobile Page/qr-img.png";

const LandingPageMobile = () => {
  return (
    <>
      {/* container for Landing Page Mobile section */}
      {/* flex container for Landing Page Mobile section */}
      <div className="flex-container-landing-page-mobile-section">
        {/* width-set-for-lading-page */}
        <div className="width-set-for-landing-page-mobile-section">
          {/* container for QR Codes and the landing page heading image */}
          <div className="container-for-qr-codes-and-heading-img">
            {/* title heading and info */}
            <div className="title-heading-info-and-qr-for-mobile">
              <div className="title-heading-info">
                <p class="section-title">SHOBIO MOBILE</p>
                <h1>Run your business wherever you are</h1>
                <p className="info-paragraph-for-mobile-qr">
                  The Shopify app lets you manage orders, products, staff, and
                  customers — from your desk, your couch, or anywhere
                  in‑between.
                </p>
              </div>
              <div className="qr-codes-for-mobiles">
                <p className="scan-to-install-text">Scan to install</p>
                <div className="scan-to-install">
                  <div className="scanner-qr-ios">
                    <img src={qrimg} alt="" srcset="" />
                    <p>
                      <u>IOS</u>
                    </p>
                  </div>

                  <div className="scanner-qr-android">
                    <img src={qrimg} alt="" srcset="" />
                    <p>
                      <u>Android</u>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* contains img for landing page heading */}

            <div className="image-for-landing-page-heading-section">
              <img src={hadingimg} alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPageMobile;
