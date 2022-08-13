import React from "react";
import { Link } from "react-router-dom";
import "./AddAddress.css";

const ShowAddress = (props) => {
  return (
    <>
      <div className="Deleviveryaddbox">
        <p className="Select-adreess-header-cart">Select Delivery Address</p>{" "}
        <div>
          <div className="color-box-at-address-box">
            <h2 style={{ fontSize: "18px" }}>
              {/* {props.user.addressName ? props.user.addressName : "Guest user"} */}
              Guest user address
            </h2>
            <p className="full-address-view-acrion">
              {/* {props.user.addressAddress
                ? props.user.addressAddress
                : "Guest user address"} */}
              Guest user address
              <br />
              {/* {props.user.addressCity
                ? props.user.addressCity
                : "Guest user address"} */}
              Guest user address
              <br />{" "}
              {/* {props.user.addressState
                ? props.user.addressState
                : "Guest user address"} */}
              Guest user address
              <br />{" "}
              {/* {props.user.addressPinCode
                ? props.user.addressPinCode
                : "Guest user address"} */}
              Guest user address
              <br /> +91{" "}
              {/* {props.user.addressMobileNumber
                ? props.user.addressMobileNumber
                : "Guest user address"} */}
              9999999999
            </p>{" "}
            <button
              className="Edit-btn-intext"
              //  onClick={props.editAddress}
            >
              Edit
            </button>
            <div style={{ marginTop: "0.5em" }}>
              <a to="/payment">
                <button className="savandcontinueaddress">Deliver here</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowAddress;
