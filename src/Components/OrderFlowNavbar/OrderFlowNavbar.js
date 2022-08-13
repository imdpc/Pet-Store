import React from "react";
import { Link } from "react-router-dom";

import { ImagesPath } from "./../../Assets/ImportedImages/index";
import "./OrderFlowNavbar.css";
export const OrderFlowNavbar = () => {
  return (
    <>
      <div className="statusnavbar-center-view-only">
        <div className="statusnavbar-width-only">
          <Link>
            <img
              style={{ height: "2em" }}
              src={ImagesPath.Shopisthanlog}
              alt="Shopisthan"
            />
          </Link>

          <div style={{ display: "flex" }}>
            <div>
              <p
                // className={
                //   props.cart ? "active-number-circle" : "Inactive-number-circle"
                // }
                className="Inactive-number-circle"
              >
                1
              </p>
              <div
                //    className={props.cart ? "yuhjkl" : "Inactive-yuhjkl"}
                className="Inactive-yuhjkl"
              >
                <p>Cart</p>
              </div>
            </div>
            <div
              //   className={props.address ? "line-grey-active" : "line-grey"}
              className="line-grey-active"
            ></div>
            <div>
              <p
                // className={
                //   props.address
                //     ? "active-number-circle"
                //     : "Inactive-number-circle"
                // }
                className="Inactive-number-circle"
              >
                2
              </p>
              <div
                //    className={props.address ? "yuhjkl" : "Inactive-yuhjkl"}
                className="Inactive-yuhjkl"
              >
                <p>Address</p>
              </div>
            </div>{" "}
            <div
              //   className={props.payment ? "line-grey-active" : "line-grey"}
              className="line-grey-active"
            ></div>
            <div>
              <p
                // className={
                //   props.payment
                //     ? "active-number-circle"
                //     : "Inactive-number-circle"
                // }
                className="Inactive-number-circle"
              >
                3
              </p>
              <div
                //   className={props.payment ? "yuhjkl" : "Inactive-yuhjkl"}
                className="Inactive-yuhjkl"
              >
                <p>Payment</p>
              </div>
            </div>
          </div>
          <div style={{ width: "10em" }}></div>
        </div>
      </div>
    </>
  );
};
