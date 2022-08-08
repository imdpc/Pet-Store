import React from "react";
import Product from "../Product/Product";
import "./ProductNav.css";

const ProductNav = () => {
  // products for display
  const product = [
    {
      _id: "1",
      name: "Sonoma Style BBQ",
      food_type: "ALL Dog Size",
      url: "https://waggfoods.com/assets/images/products/_productImage1xWebp/137/wagg_tasty_bones_150g.webp",

      price: 60.0,
    },
    {
      _id: "2",
      name: "Wagg Lamb Chops",
      food_type: "Dog Treats",
      url: "https://waggfoods.com/assets/images/categories/_productImage1xWebp/8281/chicken-wagg-12kg-new-active.webp",
      price: 17.0,
    },
    {
      _id: "3",
      name: "Puppy Special",
      food_type: "Growing puppys",
      url: "https://waggfoods.com/assets/images/categories/_productImage1xWebp/244/wagg-special-diets.webp",
      price: 56.0,
    },
    {
      _id: "4",
      name: "Kennel Wagg",
      food_type: "8 Weeks old",
      url: "https://waggfoods.com/assets/images/categories/_productImage1xWebp/243/wagg-puppy.webp",
      price: 89.0,
    },
    {
      _id: "4",
      name: "Kennel Wagg",
      food_type: "8 Weeks old",
      url: "https://waggfoods.com/assets/images/categories/_productImage1xWebp/243/wagg-puppy.webp",
      price: 89.0,
    },
    {
      _id: "4",
      name: "Kennel Wagg",
      food_type: "8 Weeks old",
      url: "https://waggfoods.com/assets/images/categories/_productImage1xWebp/243/wagg-puppy.webp",
      price: 89.0,
    },
    {
      _id: "4",
      name: "Kennel Wagg",
      food_type: "8 Weeks old",
      url: "https://waggfoods.com/assets/images/categories/_productImage1xWebp/243/wagg-puppy.webp",
      price: 89.0,
    },
    {
      _id: "4",
      name: "Kennel Wagg",
      food_type: "8 Weeks old",
      url: "https://waggfoods.com/assets/images/categories/_productImage1xWebp/243/wagg-puppy.webp",
      price: 89.0,
    },
  ];

  return (
    <>
      <div className="flex-main-container-shopping-products-and-navbar">
        <div className="wid-product-nav">
          <div>
            <div>
              {/* heading in navbar  */}
              <div className="product-navbar-heading">
                <div className="chdbhcbdjhzcbxhbvh">
                  <p
                    style={{
                      fontSize: "40px",
                      fontFamily: "Beau Rivage",
                      fontWeight: "800"
                    }}
                  >
                    Our Best Selling
                    <br />
                    Products
                  </p></div>
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
      </div>
    </>
  );
};

export default ProductNav;
