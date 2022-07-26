import React from 'react'
import './HomeShopNow.css'

const HomeShopNow = () => {
  return (
    <>
      <div>
        <div className="heading-title-div">
          <p>Nutritionally Complete</p>
          <p className="heading-title-pet-shop">
            Real Pet Food <br></br>Freash From <br></br>The Fridge
          </p>
          <br />
          <div style={{ display: 'flex' }}>
            <button className="shop-nowbtn">
              Shop Now{' '}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                <path
                  style="fill:#fff"
                  d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                  data-name="Right"
                />
              </svg>
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </>
  )
}

export default HomeShopNow
