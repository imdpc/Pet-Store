import React from "react";
import Product from "../Product/Product";
import "./ProductNav.css";

const ProductNav = () => {
  return (
    <>
      <div className="flex-main-container-shopping-products-and-navbar">
        <div className="wid-product-nav">
          <div>
            <div className="product-navbar-heading">
              <h3
                style={{
                  fontSize: "40px",
                  fontFamily: "Beau Rivage",
                }}
              >
                Our Best Selling
                <br />
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
          <div className="all-cards">
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductNav;
