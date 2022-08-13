import React from "react";
import "./HomeShopNow.css";
import img1 from "../../Assets/imghomepage-removebg-preview.png"

const HomeShopNow = () => {
  return (
    <>
      {/* div for flex and justify-content center  */}
      <div className="main-div-for-pet-shop">
        {/* div for  width */}
        <div className="sub-div-for-pet-shop">
          <div className="heading-title-div">

            {/* heading  */}
            <p className="nuetritionaly-complete-text-in-heading-shop-now">
              Nutritionally Complete
            </p>
            <p className="heading-title-pet-shop">
              Real Pet Food <br></br>Freash From <br></br>The Fridge.
            </p>
            {/* button for shop now  */}
            <button className="shop-nowbtn">
              Shop Now{" "}
              {/* <img
                  src="https://i.pinimg.com/736x/dd/d1/c2/ddd1c2476bcb099d675bf282f0a40192.jpg"
                  alt=""
                  className="arrow-icon-in-btn"
                /> */}
            </button>
            <br />
          </div>
          {/* images in shop nao section */}
          <div className="images-in-home-screen-components">
            <div className="contains-images-for-advertise">
              <img
                className="pet-food-image"
                src={img1}
                alt=""
              />

              <img
                className="pet-food-promo-image"
                src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeShopNow;
