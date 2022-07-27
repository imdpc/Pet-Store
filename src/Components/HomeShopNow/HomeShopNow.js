import React from 'react'
import './HomeShopNow.css'

const HomeShopNow = () => {
  return (
    <>
      <div>
        <div className="main-div-for-pet-shop">
          <div className="heading-title-div">
            <p>Nutritionally Complete</p>
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
              src="https://img.pikbest.com/templates/20210416/bg/d85056f8e9de0.jpg!c1024wm0"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeShopNow
