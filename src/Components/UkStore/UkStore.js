import React from 'react'
import './UkStore.css'
import ukimage from '../../Assets/pet-shop-img.png'

const UkStore = () => {
  return (
    <>
      <div style={{ display: 'flex', columnGap: '85px' }}>
        <div>
          <img src={ukimage} alt="" className="uk-image" />
        </div>
        <div className="descreption-ukstore">
          <h2 className="heading-title-ukstore">
            Become The UK's Largest <br />
            Producer Of Dry Food
          </h2>
          <br />
          <p>
            Products include foods formulated for adult,working dogs <br />
            and puppies,treats and rewards. The UK's third largest <br />
            brand by value. Wagg Treats the 4th largest and fastest <br />
            growing treat brand in the UK.{' '}
          </p>
          <br />
          <div>
            <ul>
              <li className="uk-store-key-points">
                <img
                  className="check-mark-svg"
                  src="https://cdn-icons-png.flaticon.com/512/6459/6459980.png"
                  alt=""
                />
                {'   '}
                <p>Luxurious Skincare Solution</p>
              </li>
              <li className="uk-store-key-points">
                <img
                  className="check-mark-svg"
                  src="https://cdn-icons-png.flaticon.com/512/6459/6459980.png"
                  alt=""
                />
                {'   '}
                Educating and Empowering
              </li>
              <li className="uk-store-key-points">
                <img
                  className="check-mark-svg"
                  src="https://cdn-icons-png.flaticon.com/512/6459/6459980.png"
                  alt=""
                />
                {'   '}
                Positive and Transperent Industry.
              </li>
            </ul>
          </div>
          <br />
          <button className="uk-store-btn">Shop Now</button>
        </div>
      </div>
    </>
  )
}

export default UkStore
