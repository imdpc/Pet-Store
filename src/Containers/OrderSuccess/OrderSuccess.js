import React from "react";
import { useHistory } from "react-router-dom";
import "./OrderSuccess.css";

const OrderSuccess = () => {
  const history = useHistory();

  const onClick = (val) => {
    if (val === "profile") {
      return history.push({
        pathname: "/userProfile",
        state: {
          showOrder: true,
        },
      });
    } else {
      return history.push({
        pathname: "/",
      });
    }
  };

  return (
    <>
      <div className="centersuccess-message">
        <div className="esfgdthfjg">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="border-of-success-messa">
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="80px"
                height="80px"
                viewBox="0 0 512.000000 512.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                  fill="#fff"
                  stroke="none"
                >
                  <path
                    d="M4419 4532 c-31 -11 -76 -33 -100 -50 -24 -17 -606 -593 -1294 -1281
l-1250 -1251 -490 488 c-566 564 -530 537 -705 537 -98 0 -110 -2 -175 -33
-58 -28 -92 -55 -206 -170 -178 -179 -194 -210 -194 -372 0 -190 -58 -120 838
-1017 597 -597 782 -777 817 -792 67 -30 171 -29 236 4 38 19 388 364 1605
1582 1776 1778 1614 1598 1614 1793 0 160 -16 191 -195 372 -167 169 -219 198
-358 204 -66 3 -101 0 -143 -14z"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div>
            <h2 className="your-order-suuccess-done">
              Your order is successful!
            </h2>
            <p className="Paragh-of-confirmde-msg-order">
              You will receive a confirmation message shortly. For more details,
              check order status on your Profile.
            </p>
            <div style={{ display: "grid", justifyContent: "center" }}>
              <button
                className="view-order-button-in-box"
                onClick={() => onClick("profile")}
              >
                View order
              </button>

              <button
                className="continue-shop-button-in-box"
                onClick={() => onClick("home")}
              >
                Continue shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderSuccess;
