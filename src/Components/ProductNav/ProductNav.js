import React from "react";
import Product from "../Product/Product";
import "./ProductNav.css";

const ProductNav = () => {
  const product = [
    {
      _id: "1",
      name: "Sonoma Style BBQ",
      food_type: "ALL Dog Size",
      price: 60.0,
    },
    {
      _id: "2",
      name: "Wagg Lamb Chops",
      food_type: "Dog Treats",
      price: 17.0,
    },
    {
      _id: "3",
      name: "Puppy Special",
      food_type: "Growing puppys",
      price: 56.0,
    },
    {
      _id: "4",
      name: "Kennel Wagg",
      food_type: "8 Weeks old",
      price: 89.0,
    },
  ];

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
            {product.map((val, index) => (
              <Product productDetail={val} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductNav;
