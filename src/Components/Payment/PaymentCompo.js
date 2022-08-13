import React from "react";
import "./payment.css";

const PaymentComponent = (props) => {
  return (
    <>
      <div className="Deleviveryaddbox">
        <p className="Select-adreess-header-cart">Payment</p>{" "}
        <div>
          <div className="color-box-at-address-box">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                }}
              >
                <input type="radio" className="radio-for-pYAMNET-page" />
                <p style={{ fontSize: "18px", fontWeight: "500" }}>
                  Cash on Delivery
                </p>
              </div>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
                iconSize="20"
                class="Icon-sc-1iwi4w1-0 fvvrdU"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zM6.355 12.322l2.761 2.76 7.863-7.85A.793.793 0 1118.1 8.355l-8.42 8.413a.793.793 0 01-1.122 0l-3.326-3.324a.791.791 0 01.56-1.354c.211 0 .413.084.562.233z"
                  fill="#06A759"
                ></path>
              </svg>
            </div>
          </div>
          <div className="online-payment-coming-soon">
            <div
              style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
              }}
            >
              <input type="radio" className="radio-for-pYAMNET-page" />
              {/* <p onClick={displayRazorpay}>Online Payment</p> */}
              <p style={{ fontSize: "18px", fontWeight: "500" }}>
                Online Payment
              </p>
            </div>
          </div>
          <div style={{ marginTop: "2em" }}>
            {/* {lodingButton ? (
              <button className="savandcontinueaddress">Please wait...</button>
            ) : ( */}
            <button className="savandcontinueaddress">Place Order</button>
            {/* )}{" "} */}
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default PaymentComponent;
