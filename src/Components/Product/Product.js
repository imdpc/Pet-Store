import React from "react";
import heart from "../../Assets/heart.png"

import cart from "../../Assets/plus.png"
import "./Product.css";
const Product = (props) => {
  return (
    <>
      <div className="shopping-product-cards-container">
        <div className="product-info-card-for-selection">
          <div className="image-for-like-the-product">
            <img
              style={{
                height: "13px",
                width: "13px",
              }}
              src={heart}
              alt=""
              srcset=""
            />
          </div>
          <div className="image-of-the-product-details">
            <img
              className="image-class-for-respo-height"
              src={props.productDetail.url}
              alt=""
              srcset=""
            />
          </div>
        </div>
        <div className="bottom-section-about-products-details">
          <div className="product-name-for-selection">
            <p>{props.productDetail.name}</p>
          </div>
          <div className="sizes-for-all-dogs-selection">
            <p>{props.productDetail.food_type}</p>
          </div>
          <div className="review-price-and-add-to-card-button">
            <p>
              <span className="price-tag-in-review">
                ${props.productDetail.price}
              </span>
              <span className="star-review-for-product">&#11088; </span> 4.9{" "}
              <span style={{ color: "gray", fontSize: "13px" }}>(8000 reviews)</span>
            </p>
            <div className="container-image-for-add-to-cart">
              <button className="image-for-add-to-cart" type="submit">
                <img className="cart-logo-incontainer-img"

                  src={cart}
                  alt=""
                  srcset=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default Product;
