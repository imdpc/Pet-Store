import React, { useState } from "react";
import { useSelector } from "react-redux";
import { OrderFlowNavbar } from "../../Components/OrderFlowNavbar/OrderFlowNavbar";
import PaymentComponent from "../../Components/Payment/PaymentCompo";
import PriceDetails from "../../Components/PriceDetails/PriceDetails";
import OrderSuccess from "../OrderSuccess/OrderSuccess";

export const Payment = () => {
  // if (Object.keys(cart.cartItems).length === 0 && !showOrderSucess) {
  //   return (
  //     <>
  //       <OrderFlowNavbar />
  //       <div className="disde-dl-ed-jkew-corinks">No Items. Shop Now...!</div>
  //     </>
  //   );
  // }

  return (
    <>
      <OrderFlowNavbar />
      <div className="disde-dl-ed-jkew-corinks">
        <>
          <div className="card-jekdnml-cwoerrwwk">
            <div
              style={{
                overflowY: "scroll",
                height: "40em",
              }}
            >
              <PaymentComponent />
            </div>
          </div>
          <PriceDetails />
        </>
      </div>
    </>
  );
};

{
  /* <OrderSuccess /> */
}
