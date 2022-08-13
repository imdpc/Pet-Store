import React, { useState } from "react";
import { useSelector } from "react-redux";
import { OrderFlowNavbar } from "../../components/OrderFlowNavbar/OrderFlowNavbar";
import PaymentComponent from "../../components/Payment/payment";
import { PriceDetails } from "../../components/PriceDetails/PriceDetails";
import OrderSuccess from "../OrderSuccess/OrderSuccess";

export const Payment = () => {
  const cart = useSelector((state) => state.cart);
  const [showOrderSucess, setShowOrderSucess] = useState(false);

  if (Object.keys(cart.cartItems).length === 0 && !showOrderSucess) {
    return (
      <>
        <OrderFlowNavbar payment={true} address={true} cart={true} />
        <div className="disde-dl-ed-jkew-corinks">No Items. Shop Now...!</div>
      </>
    );
  }

  return (
    <>
      <OrderFlowNavbar payment={true} address={true} cart={true} />
      <div className="disde-dl-ed-jkew-corinks">
        {showOrderSucess ? (
          <OrderSuccess />
        ) : (
          <>
            <div className="card-jekdnml-cwoerrwwk">
              <div
                style={{
                  overflowY: "scroll",
                  height: "40em",
                }}
              >
                <PaymentComponent
                  orderSucess={() => setShowOrderSucess(true)}
                />
              </div>
            </div>
            <PriceDetails cart={cart} addAddress={true} />
          </>
        )}
      </div>
    </>
  );
};
