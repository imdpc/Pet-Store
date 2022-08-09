import React from 'react'
import './FindEverything.css'
import fimage from '../../Assets/png-transparent-shar-pei-puppy-cat-kitten-veterinarian-veterinary-animals-carnivoran-photography-removebg-preview.png'

const FindEverything = () => {
  return (
    <>
      <div className="flex-div-for-before-footer-section">
        <div className="wid-div-for-before-footer-section">
          <div>
            <img src={fimage} alt="" className="fimage-style" />
          </div>
          <div>
            <div className="heading-in-section">
              <h2 style={{ fontWeight: '800' }}>
                Find Everything You <br /> Need For Dogs
              </h2>

              <div>
                <button className="shop-btn-for-content">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FindEverything
