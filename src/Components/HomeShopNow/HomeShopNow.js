import React from 'react'
import './HomeShopNow.css'

const HomeShopNow = () => {
  return (
    <>
      <div className="main-div-for-pet-shop">
        <div className="sub-div-for-pet-shop">
          <div className="heading-title-div">
            <p className='first-para-in-heding'>Nutritionally Complete</p>
            <p className="heading-title-pet-shop">
              Real Pet Food <br></br>Freash From <br></br>The Fridge.
            </p>

            <button className="shop-nowbtn">
              Shop Now{' '}
              {/* <img
                  src="https://i.pinimg.com/736x/dd/d1/c2/ddd1c2476bcb099d675bf282f0a40192.jpg"
                  alt=""
                  className="arrow-icon-in-btn"
                /> */}
            </button>
            <br />
          </div>
          <div>
            <img
              className="pet-food-image"
              src="https://www.pngkey.com/png/detail/112-1121805_food-bag-dr-garys-best-breed-dog-food.png"
              alt=""
            />

            <img
              className="pet-food-promo-image"
              src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeShopNow
