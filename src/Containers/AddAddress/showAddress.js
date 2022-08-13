import React from "react";
import { Link } from "react-router-dom";
import "./addaddress.css";

const ShowAddress = (props) => {
  return (
    <>
      <div className="Deleviveryaddbox">
        <p className="Select-adreess-header-cart">Select Delivery Address</p>{" "}
        <div>
          <div className="color-box-at-address-box">
            <h2 style={{ fontSize: "18px" }}>
              {/* {props.user.addressName ? props.user.addressName : "Guest user"} */}
            </h2>
            <p className="full-address-view-acrion">
              {props.user.addressAddress
                ? props.user.addressAddress
                : "Guest user address"}
              <br />
              {props.user.addressCity
                ? props.user.addressCity
                : "Guest user address"}
              <br />{" "}
              {props.user.addressState
                ? props.user.addressState
                : "Guest user address"}
              <br />{" "}
              {props.user.addressPinCode
                ? props.user.addressPinCode
                : "Guest user address"}
              <br /> +91{" "}
              {props.user.addressMobileNumber
                ? props.user.addressMobileNumber
                : "Guest user address"}
            </p>{" "}
            <button className="Edit-btn-intext" onClick={props.editAddress}>
              Edit
            </button>
            <div style={{ marginTop: "0.5em" }}>
              <Link to="/payment">
                <button className="savandcontinueaddress">Deliver here</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowAddress;
