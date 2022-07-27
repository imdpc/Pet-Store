import React from "react";
import "./ProductNav.css";

const ProductNav = () => {
  return (
    <>
      <div className="flex-main-container-shopping-products-and-navbar">
        <div style={{ gap: "50px" }}>
          <div className="product-navbar-heading">
            <h3 style={{ fontSize: "24px" }}>
              Our Best Selling <br />
              Products
            </h3>
            <div className="product-navbar-all-content">
              <p className="product-navbar-sub-content">All product</p>
              <p className="product-navbar-sub-content">Dog Treats</p>
              <p className="product-navbar-sub-content">Dog Food</p>
              <p className="product-navbar-sub-content">Special Diets</p>
              <p className="product-navbar-sub-content">Puppy Food</p>
            </div>
          </div>
        </div>
        <div className="shopping-product-cards-container">
          <div className="product-info-card-for-selection">
            <div className="image-for-like-the-product">
              <img
                style={{
                  height: "13px",
                  width: "13px",
                }}
                src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png"
                alt=""
                srcset=""
              />
            </div>
            <div className="image-of-the-product-details">
              <img
                style={{
                  height: "190px",
                  width: "146px",
                }}
                src="https://waggfoods.com/assets/images/products/_productImage1xWebp/137/wagg_tasty_bones_150g.webp"
                alt=""
                srcset=""
              />
            </div>
          </div>
          <div className="bottom-section-about-products-details">
            <div className="product-name-for-selection">
              <p>Tasty Bones</p>
            </div>
            <div className="sizes-for-all-dogs-selection">
              <p>All Dog Size</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductNav;
