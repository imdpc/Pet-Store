import React from "react";
import "./LandingPageMobile .css";
// import all images here
import hadingimg from "../../Assets/Mobile Page/heading-img.jpg";
import qrimg from "../../Assets/Mobile Page/qr-img.png";
import appimg1 from "../../Assets/Mobile Page/appimg1.svg";
import appimg2 from "../../Assets/Mobile Page/appimg2.svg";
import appimg3 from "../../Assets/Mobile Page/appimg3.svg";
import imginfo1 from "../../Assets/Mobile Page/imginfo-1.jpg";
import imginfo2 from "../../Assets/Mobile Page/imginfo-2.jpg";
import imginfo3 from "../../Assets/Mobile Page/imginfo-3.jpg";
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
      {/* mobile app section after heading */}
      {/* flex container for app feature section*/}
      <div className="flex-container-for-app-section-mobile-landing-page">
        {/* width set for mobile app section */}
        <div className="width-set-for-app-section-mobile-landing-page">
          {/* contain heading and overlook of app features */}
          <div className="heading-and-app-feature-section">
            {/* heading for the section */}
            <div className="div-for-heading-app-feature">
              <h1>
                Running your business isn’t a desk job. The Shopify app keeps it
                that way.
              </h1>
            </div>
            {/* application feature */}
            <div className="app-features-after-heading">
              <div className="first-feature-for-app">
                <img src={appimg1} alt="" srcset="" />
                <h3>Create your online store</h3>
                <p>
                  Bring your idea to life without any coding or design
                  experience
                </p>
              </div>
              <div className="second-feature-for-app">
                <img src={appimg2} alt="" srcset="" />
                <h3>Grow your audience</h3>
                <p>
                  Promote your business with built-in SEO, social media, and
                  marketing tools
                </p>
              </div>
              <div className="third-feature-for-app">
                <img src={appimg3} alt="" srcset="" />
                <h3>Manage from anywhere</h3>
                <p>
                  Keep track of sales, payments, and fulfillments, all from your
                  phone
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* third section in the Landing Page Mobile */}
      {/* flex container for img and info section in the Landing Page Mobile */}

      <div className="flex-container-for-img-and-info-section">
        {/* width set for img-and-info-section */}
        <div className="width-set-for-img-and-info-section">
          {/* container of the section */}
          <div className="container-info-and-img-section">
            {/* heading and para section */}
            <div className="heading-and-paragraph-for-img">
              <h2>Manage your Shopify store on-the-go</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Molestiae, molestias sunt temporibus, nihil ex debitis eveniet a
                libero est inventore culpa optio amet cum veritatis atque
                soluta! Cum, minus. Fugit!
              </p>
            </div>
            {/* img after info and heading */}
            <div className="img-for-section-after-para">
              <img src={imginfo1} alt="" srcset="" />
            </div>
          </div>
          <div className="container-info-and-img-section-2">
            {/* img after info and heading */}
            <div className="img-for-section-after-para-2">
              <img src={imginfo2} alt="" srcset="" />
            </div>
            {/* heading and para section */}
            <div className="heading-and-paragraph-for-img-2">
              <h2>Respond to real-time information</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aperiam illo error animi quisquam, numquam quibusdam perferendis
                architecto! Atque eius doloremque omnis expedita minima,
                laboriosam eum tempora adipisci quas reprehenderit non!
              </p>
            </div>
          </div>{" "}
          <div className="container-info-and-img-section">
            {/* heading and para section */}
            <div className="heading-and-paragraph-for-img">
              <h2>Keep track of incoming orders anytime, anywhere</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae velit fuga delectus adipisci voluptates unde
                consequatur quod voluptas optio, minus, numquam, exercitationem
                porro animi! Pariatur illum nesciunt animi vero dicta.
              </p>
            </div>
            {/* img after info and heading */}
            <div className="img-for-section-after-para">
              <img src={imginfo3} alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>

      {/* flex container for bottom side qr code part */}
      <div className="flex-container-bottom-qr-downloads">
        <div className="width-for-bottom-qr-downloads">
          <div className="title-heading-info-and-qr-for-mobile">
            <div className="title-heading-info-bottom">
              <h1>Run your business wherever you are</h1>
            </div>
            <div className="qr-codes-for-mobiles-bottom">
              <p className="scan-to-install-text">Scan to install</p>
              <div className="scan-to-install-bottom">
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
        </div>
      </div>
    </>
  );
};

export default LandingPageMobile;
