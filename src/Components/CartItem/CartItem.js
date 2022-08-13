import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// import { PriceWithComma } from "../../Functions";
// import "./style.css";
import "./CartItem.css";
import { ImagesPath } from "./../../Assets/ImportedImages/index";
/**
 *
 **/
const CartItem = () => {
  // const onQuantityIncrement = () => {
  //   if (qty >= 5) return;
  //   setQty(qty + 1);
  //   props.onQuantityInc(_id, productName, productPrice, img, storeId);
  // };

  // const onQuantityDecrement = () => {
  //   if (qty === 1) {
  //     return props.onRemoveCartItem(_id);
  //   }
  //   setQty(qty - 1);
  //   props.onQuantityDec(_id, productName, productPrice, img, storeId);
  // };

  return (
    <>
      <div className="cart-design-products-main-page">
        <div className="cart-design-product-inner-container">
          <div>
            <div
              style={{
                display: "flex",
                gap: "10px",
                borderBottom: "1px solid #e6e6e6",
                paddingBottom: "8px",
                marginBottom: "15px",
              }}
            >
              <div className="cart-design-image-for-the-product">
                <img
                  className="cart-design-image"
                  // src={img}
                  src={ImagesPath.Empty_bag}
                  alt=""
                />
              </div>
              <div className="cart-design-product-description">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <p className="cart-design-product-name">
                    products name
                    {/* {productName} */}
                  </p>
                  <h3
                    className="remove-btn-in-cart"
                    // onClick={() => props.onRemoveCartItem(_id)}
                  >
                    Remove
                  </h3>
                </div>

                <div className="cart-design-final-offer-price">
                  {/* <h3 className="actual-pice-in-cart">
                    {PriceWithComma(productPrice)}
                  </h3> */}
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "5px",
                    alignItems: "center",
                  }}
                >
                  <p className="aqty-txt-in-oij">Qty</p>
                  <div className="cart-design-product-inc-dec">
                    {/* {qty === 1 ? ( */}

                    {/* ) : ( */}
                    <>
                      <div style={{ padding: "4px 15px" }}>
                        <svg
                          //   onClick={onQuantityDecrement}
                          viewBox="0 0 12 2"
                          fill="greyBase"
                          xmlns="http://www.w3.org/2000/svg"
                          id="desc_icon"
                          width="13px"
                          height="13px"
                          iconSize="20"
                          class="Icon-sc-1iwi4w1-0 gkgDCz"
                        >
                          <path
                            d="M11 1.834H1A.836.836 0 01.167 1C.167.542.542.167 1 .167h10c.458 0 .833.375.833.833a.836.836 0 01-.833.834z"
                            fill="#333"
                          ></path>
                        </svg>
                      </div>
                    </>
                    {/* )} */}
                    <input
                      style={{
                        width: "20px",
                        border: "none",
                        color: "#333",
                        textAlign: "center",
                      }}
                      //   readOnly
                      //   value={qty}
                    />
                    <div style={{ padding: "4px 15px", cursor: "pointer" }}>
                      <svg
                        // onClick={onQuantityIncrement}
                        viewBox="0 0 14 14"
                        fill="greyBase"
                        xmlns="http://www.w3.org/2000/svg"
                        id="inc_icon"
                        width="13px"
                        height="13px"
                        iconSize="20"
                        class="Icon-sc-1iwi4w1-0 gkgDCz"
                      >
                        <path
                          d="M12.714 7.835H7.85v4.879c0 .524-.326.952-.85.952s-.825-.428-.825-.952V7.835h-4.89C.763 7.835.334 7.523.334 7c0-.524.429-.82.953-.82h4.889V1.285c0-.523.301-.952.825-.952s.85.429.85.952V6.18h4.864c.524 0 .953.296.953.82 0 .523-.429.835-.953.835z"
                          fill="#333"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p className="tatil-bcwekla-cew">Total Price</p>{" "}
              {/* <p className="tatil-bcwekla-cew">
                {" "}
                {PriceWithComma((productPrice * qty).toFixed(2))}
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
