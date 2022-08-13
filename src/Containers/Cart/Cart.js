import React, { useState, useEffect } from "react";

import "./Cart.css";

import CartItem from "../../Components/CartItem/CartItem";

import { OrderFlowNavbar } from "./../../Components/OrderFlowNavbar/OrderFlowNavbar";
import PriceDetails from "./../../Components/PriceDetails/PriceDetails";

export const StoreViewCart = () => {
  //   if (Object.keys(cartItems).length === 0) {
  //     return (
  //       <>
  //         <OrderFlowNavbar />
  //         <div className="sec2">
  //           <div className="sec3">
  //             <b> Cart is Empty</b>
  //           </div>
  //           <div
  //             style={{
  //               display: "flex",
  //               justifyContent: "center",
  //               marginTop: "5em",
  //             }}
  //           >
  //             {" "}
  //             <img
  //               src={ImagesPath.Empty_bag}
  //               class="image-cart-ckeuwo"
  //               alt={"CartBag"}
  //             />
  //           </div>

  //           <div className="sec4">
  //             <p>Your bag is empty.</p>
  //             <p>Start shopping!! </p>
  //           </div>
  //         </div>
  //       </>
  //     );
  //   }

  return (
    <>
      <OrderFlowNavbar />
      <div className="disde-dl-ed-jkew-corinks">
        <div className="card-jekdnml-cwoerrwwk">
          <div className="your-bag-dropdown">
            {" "}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <p className="cart-header-cart">Cart</p>{" "}
              <span className="eiofskl">
                {/* {Object.keys(cartItems).length}{" "}
                {Object.keys(cartItems).length > 1 ? "Items" : "Item"} */}{" "}
                Items
              </span>
            </div>
          </div>
          <div
            style={{
              overflowY: "scroll",
              height: "calc(100vh - 10rem)",
            }}
          >
            {/* {Object.keys(cartItems).map((key, index) => ( */}
            <CartItem
            // key={index}
            // cartItem={cartItems[key]}
            // onQuantityInc={onQuantityIncrement}
            // onQuantityDec={onQuantityDecrement}
            // onRemoveCartItem={onRemoveCartItem}
            // onQuantityInc={onQuantityIncrement}
            // onQuantityDec={onQuantityDecrement}
            // onQuantityDecWithSize={onQuantityDecWithSize}
            // onQuantityIncrementWithSize={onQuantityIncrementWithSize}
            // onRemoveCartItem={onRemoveCartItem}
            />
            {/* ))} */}
            {/* <AddAddress /> */}
          </div>
        </div>
        {/* <div className="ne-line-between-lnce-kjne"></div> */}

        <PriceDetails />
      </div>
    </>
  );
};

export default StoreViewCart;
