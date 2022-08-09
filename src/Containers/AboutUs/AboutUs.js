import React from "react";
import "./AboutUs.css";
import aboutusimg from "../../Assets/about-us petshop img.jpg";
import ourmissionimg from "../../Assets/about-us-our-mission img";
import NavBar from "../../Components/NavBar/NavBar";
// import ourstoreimg1 from "../../Assets/pet-shop-img.png";
// import ourstoreimg2 from "../../Assets/our stores 2";
// import ourstoreimg3 from "../../Assets/our stores 3";
import AboutStoresComponent from "../../Components/AboutStoresComponent/AboutStoresComponent";
import PetShopFooter from "../../Components/PetShopFooter/PetShopFooter";
import Nav from "../../Components/Nav/Nav";
const AboutUs = () => {
  const ourstores = [
    {
      _id: "1",
      city: "Los Angeles",
      address:
        "6100 Wilshire Blvd 2nd Floor Los Angeles CA 90048+1 310 499 7700",
      url: "https://cdn.shopify.com/s/files/1/0605/2616/6208/files/l1_814x_crop_center.jpg?v=1652121899",
    },
    {
      _id: "1",
      city: "New York",
      address:
        "6100 Wilshire Blvd 2nd Floor Los Angeles CA 90048+1 310 499 7700",
      url: "https://cdn.shopify.com/s/files/1/0605/2616/6208/files/l2_02ef41fb-6bdd-40b6-96e2-057a6dc7e950_814x_crop_center.jpg?v=1652123671",
    },
    {
      _id: "1",
      city: "Shicago",
      address:
        "6100 Wilshire Blvd 2nd Floor Los Angeles CA 90048+1 310 499 7700",
      url: "https://cdn.shopify.com/s/files/1/0605/2616/6208/files/l3_814x_crop_center.jpg?v=1652121898",
    },
  ];
  return (
    <>
      <Nav />
      <div className="for-responsive-width">
        <div className="about-heading-image-and-text">
          <div className="container-for-img-and-headings-and-para">
            <img
              src={aboutusimg}
              alt=""
              srcset=""
              style={{ width: "100%", height: "400px" }}
            />
            <div className="content-for-about-us">
              <h1>About</h1>
              <p>
                Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit
                soleat phaedrum te duo, eum cu recteque expetendis neglegentur.
              </p>
            </div>
          </div>
        </div>
        <div className="flex-container-width-for-para">
          <div className="width-set-for-about-us">
            <div className="para-after-heading-text-and-image">
              <p>
                Slowly she drifted to the southeast, rising higher and higher as
                the flames ateaway her wooden parts and diminished.
              </p>
            </div>
            <div className="image-and-our-mission-detais">
              <div className="img-for-our-mission-about-us">
                <img
                  style={{ width: "100%" }}
                  src={ourmissionimg}
                  alt=""
                  srcset=""
                />
              </div>
              <div className="content-for-our-mission">
                <div className="text-for-our-mission-details">
                  <div className="our-mission-heading">
                    <p>OUR MISSION</p>
                  </div>
                  <div className="our-mission-sub-heading">
                    <h2>
                      If you don't feel comfortable in your clothes, it's hard
                      to think.
                    </h2>
                  </div>
                  <div className="our-mission-para">
                    <p>
                      It's sometimes said that I'm rebellious and I do things to
                      push people's buttons, but I just like the challenge.
                      First I made a dress because I was pregnant and I wanted
                      to be the most beautiful pregnant woman. Then I made a
                      sweater because I wanted to have one that wasn't like
                      anyone else's.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="heading-for-our-stores-and-subheading">
              <div>
                <div style={{ fontSize: "xxx-large" }}>
                  <h1>Our Stores</h1>
                </div>
                <div style={{ fontSize: "larger" }}>
                  <p>Check out our furniture stores you can shop right now.</p>
                </div>
              </div>
            </div>
            <div className="our-stores-from-different-countries-deatils">
              {ourstores.map((val, index) => (
                <AboutStoresComponent storeDetails={val} />
              ))}
            </div>
            <div className="heading-for-our-stores-and-subheading">
              <div>
                <div style={{ fontSize: "xxx-large" }}>
                  <h1>Testimonials</h1>
                </div>
                <div style={{ fontSize: "larger" }}>
                  <p>
                    We take pride in our work and our customer testimonials
                    reflect that.
                  </p>
                </div>
              </div>
            </div>
            <div className="dot-navigation-for-testimonials">
              <div
                className="width-set-for-testimonials"
                style={{ width: "50em" }}
              >
                <div className="tabset-for-testimonials">
                  {/* <!-- Tab 1 --> */}
                  <input
                    type="radio"
                    name="tabset"
                    id="tab1"
                    aria-controls="marzen"
                    checked
                  />
                  <label for="tab1">New York</label>
                  {/* <!-- Tab 2 --> */}
                  <input
                    type="radio"
                    name="tabset"
                    id="tab2"
                    aria-controls="rauchbier"
                  />
                  <label for="tab2">Los Angeles</label>
                  {/* <!-- Tab 3 --> */}
                  <input
                    type="radio"
                    name="tabset"
                    id="tab3"
                    aria-controls="dunkles"
                  />
                  <label for="tab3">Las Vegas</label>
                  <div className="tab-panels">
                    <section id="marzen" className="tab-panel">
                      <div
                        style={{ display: "grid", rowGap: "1em" }}
                        className="contains-para-and-name-of"
                      >
                        <p style={{ fontSize: "x-large" }}>
                          It took me a long time to find what I liked so I love
                          the end tables. The delivery men were nice and
                          efficient.
                        </p>
                        <h2 style={{ fontSize: "larger" }}>ADALINE CARTER</h2>
                      </div>
                    </section>
                    <section id="rauchbier" className="tab-panel">
                      <div
                        style={{ display: "grid", rowGap: "1em" }}
                        className="contains-para-and-name-of"
                      >
                        <p style={{ fontSize: "x-large" }}>
                          Furniture came in beautiful condition. Very pleased
                          with the quality. Customer Service was really
                          excellent.
                        </p>
                        <h2 style={{ fontSize: "larger" }}>DESTINY MORGAN</h2>
                      </div>
                    </section>
                    <section id="dunkles" className="tab-panel">
                      <div
                        style={{ display: "grid", rowGap: "1em" }}
                        className="contains-para-and-name-of"
                      >
                        <p style={{ fontSize: "x-large" }}>
                          Outstanding customer service. We purchased 7 items for
                          our office, including chairs, filing cabinets, & a
                          bench.
                        </p>
                        <h2 style={{ fontSize: "larger" }}>LUKAS LARSEN</h2>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <PetShopFooter /> */}
    </>
  );
};

export default AboutUs;
