import React from "react";
import "./PetShopFooter.css";
import fimage from "../../Assets/footer-image.png";
import send from "../../Assets/send footer.png";
import "./PetShopFooter.css";

const PetShopFooter = () => {
  return (
    <>
      {/* pet shop footer  */}
      <div className="main-div-for-flex-center">
        <div className="footer-div-for-widith">
          <div className="footer-img">
            {" "}
            <img className="footer-img-respo"
              src={fimage}
              alt=""

            />
          </div>
          <div className="pet-shop-footer">
            {/* pet shop footer first column */}
            <div className="footer-first-column">
              <h2 style={{ fontFamily: "Beau Rivage", fontSize: "30px" }}>
                Wagg
              </h2>
              <br />
              <p>Our exports are avilable 24/7:</p>
              <div className="call-section-div"

              >
                <p>
                  {/* phone icon in the first column  */}
                  <img
                    className="call-img-in-footer"
                    src="https://cdn-icons.flaticon.com/png/512/1634/premium/1634473.png?token=exp=1658924298~hmac=6a7647edc775862a17ae1cd5910a1aff"
                    alt=""
                  />
                </p>

                <p>1-800-672-4399</p>
              </div>
              <div className="email-section-div"
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <p>
                  {/* fax icon in first column */}
                  <img
                    className="email-img-in-footer"
                    src="https://cdn-icons-png.flaticon.com/512/7852/7852594.png"
                    alt=""
                  />
                </p>
                <p>waggfood.uk</p>
              </div>
              {/* download button in first column  */}
              <div className="footer-btn-group">
                <button type="submit" className="apple-store-btn">
                  <span>
                    <img
                      className="apple-logo-in-btn"
                      src="https://cdn-icons-png.flaticon.com/512/160/160139.png"
                      alt=""
                    />
                  </span>
                  Download on the <br /> App Store
                </button>
                <button type="submit" className="apple-store-btn">
                  <span>
                    <img
                      className="apple-logo-in-btn"
                      src="https://cdn-icons-png.flaticon.com/512/6124/6124997.png"
                      alt=""
                    />
                  </span>
                  Download on the <br /> play Store
                </button>
              </div>
            </div>
            <div>
              {/* secound column in footer  */}
              <h2>Our Products</h2>
              <br />
              <ul className="footer-second-col">
                <li>Dog Treats</li>
                <li>Adult Dog</li>
                <li>Diets Dog Foods</li>
                <li>Puppy Food</li>
                <li>Special Food</li>
              </ul>
            </div>
            <div>
              {" "}
              {/* third column  */}
              <h2>Wagg World</h2>
              <br />
              <ul className="footer-third-col">
                <li>About Wagg</li>
                <li>The Team</li>
                <li>Environment</li>
                <li>News</li>
                <li>Feeding Guide</li>
              </ul>
            </div>
            <div>
              {" "}
              {/* fourth column  */}
              <h2>Resource</h2>
              <br />
              <ul className="footer-fourth-col">
                <li>Download</li>
                <li>Help</li>
                <li>Guides</li>
                <li>Partners Network</li>
                <li>Developers</li>
              </ul>
            </div>
            <div>
              {" "}
              {/* fifth column  */}
              <h2>News Letter</h2>
              <div>
                <div>
                  <input
                    type="email"
                    name=""
                    placeholder="Enter Email"
                    className="input-email-in-footer"
                    maxLength={20}
                  />
                </div>
                <div>
                  <img
                    className="icon-in-search"
                    src={send}
                    alt=""
                  />
                </div>
              </div>
              <div className="social-media-icons-in-footer">
                <div className="social-media-rounded-div">
                  <img
                    className="footer-icon-img"
                    src="https://cdn-icons-png.flaticon.com/512/160/160154.png"
                    alt=""
                  />
                </div>
                <div className="social-media-rounded-div">
                  <img
                    className="footer-icon-img"
                    src="https://cdn-icons.flaticon.com/png/512/739/premium/739257.png?token=exp=1658987951~hmac=f98f358fc35ffab77b43eb363d417915"
                    alt=""
                  />
                </div>
                <div className="social-media-rounded-div">
                  <img
                    className="footer-icon-img"
                    src="https://cdn-icons-png.flaticon.com/512/5968/5968534.png"
                    alt=""
                  />
                </div>
                <div className="social-media-rounded-div">
                  <img
                    className="footer-icon-img"
                    src="https://cdn-icons-png.flaticon.com/512/1077/1077046.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer rights section  */}

      <div className="container-after-foot-section">
        <div className="width-for-container-after-footer">
          <div className="all-rights-reserved-section">
            <section>
              <p>All rights reserved &copy; Wagg Food Ltd 2022</p>
            </section>
            <div className="privacy-services-terms-conditions">
              <section>
                <p>Privacy</p>
              </section>
              <section>
                <p>Services</p>
              </section>
              <section>
                <p>Terms & Conditions</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PetShopFooter;
