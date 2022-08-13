import React from "react";
import { Link } from "react-router-dom";
// import { PriceWithComma } from "../../Functions";
import "./PriceDetails.css";

const PriceDetails = () => {
  return (
    <div className="width-of-total-price-deatils-in-ione-box">
      {" "}
      <h2 className="piffcjr-nvr-price-details-page-at-noce-xa">
        Price Details
      </h2>
      <div className="new-pde-nxedd-rowncs">
        <div className="pric-detailed-inc-cmklesmfe">Product Charges</div>
        <div className="pric-detailed-inc-cmklesmfe">
          {/* {PriceWithComma(
          Object.keys(cart.cartItems).reduce((totalPrice, key) => {
            const { productPrice, qty } = cart.cartItems[key];
            return totalPrice + productPrice * qty;
          }, 0)
        )} */}
          4555
        </div>
      </div>
      {/* <div className="new-pde-nxedd-rowncs">
      <div className="pric-detailed-inc-cmklesmfe">COD Charges</div>
      <div className="pric-detailed-inc-cmklesmfe">+ ₹0</div>
    </div> */}
      <div className="new-pde-nxedd-rowncs">
        <div className="pric-detailed-inc-cmklesmfe">Delivery Charges</div>
        <div className="pric-detailed-inc-cmklesmfe">+ ₹0</div>
      </div>
      <div className="new-pde-nxedd-rowncs">
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <div className="pric-detailed-inc-cmklesmfe">Coupon (SAVEBIG)</div>
          <img
            // src={Close}
            alt=""
            style={{ height: "20px", cursor: "pointer" }}
          />{" "}
        </div>
        <div className="pric-detailed-inc-cmklesmfe">+ ₹0</div>
      </div>
      <div className="flex-for-input-of-coupon-code-apply">
        <input className="profile-nput-only" placeholder="Coupon Code"></input>
        <button className="Btn-for-apllying-code-of-copons">Apply</button>
      </div>
      <div className="order-total-inde-nelblse">
        <div className="order-total-celoefnsl">Order Total</div>
        <div className="order-total-celoefnsl">
          {/* {PriceWithComma(
            Object.keys(cart.cartItems).reduce((totalPrice, key) => {
              const { productPrice, qty } = cart.cartItems[key];
              return totalPrice + productPrice * qty;
            }, 0)
          )} */}
          555
        </div>
      </div>
      {/* <div className="checlout-padding-iinf-debll">
        {!addAddress ? (
        <Link to="/address">
          <div
            className="btn-for-checout-of-shop-profile-only"
            style={{ justifyContent: "center" }}
          >
            {" "}
            <p>Continue</p>{" "}
            
          </div>
        </Link>
        ) : null}
      </div> */}
    </div>
  );
};

export default PriceDetails;
