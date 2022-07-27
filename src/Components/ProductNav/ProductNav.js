import React from 'react'
import './ProductNav.css'

const ProductNav = () => {
  return (
    <>
      <div style={{ gap: '50px' }}>
        <div className="product-navbar-heading">
          <h3 style={{ fontSize: '24px' }}>
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
    </>
  )
}

export default ProductNav
