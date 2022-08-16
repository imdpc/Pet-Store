import React from "react";
import DawnProduct from "../../Components/DawnProduct/DawnProduct";
import DawnNav from "./../../Components/DawnNav/DawnNav";
import "./DawnScreen.css";
const DawnScreen = () => {
  return (
    <>
      {/* dawn screen for responsive nav and the product component DawnProduct */}
      <div className="dawn-navbar-and-the-dawn-product">
        {/* in this div we call the dawn-nav component */}
        <div className="dawn-nav">
          <DawnNav />
        </div>
        <div className="div-for-all-products-after-dawn-nav">
          <div className="width-set-for-screen-of-products">
            {/* div for the dawn product */}
            <div className="dawn-products">
              <DawnProduct />
              <DawnProduct />
              <DawnProduct />
              <DawnProduct />
            </div>
            <div className="dawn-products">
              <DawnProduct />
              <DawnProduct />
              <DawnProduct />
              <DawnProduct />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DawnScreen;
