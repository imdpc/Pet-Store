import React from 'react'
import './ReviewRewards.css'

const ReviewRewards = () => {
  return (
    <>
      <p className="review-heading">REVIEWS & REWARDS</p>

      <div style={{ display: 'flex', gap: '250px' }}>
        <div className="review-desc">
          <p className="customer-count-review">
            Over <span style={{ color: '#124944' }}>80000</span> customers{' '}
            <br />
            with 5 -star reviews
          </p>
          <p className="para-after-review-heading">
            Emma Lewisham is a luxury, science-led natural <br />
            skincare line backed by the highest calibre of green <br /> science
            and the innovation in the industry.{' '}
          </p>
          <div>
            <img
              className="review-img"
              src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Virat_Kohli.jpg"
              alt=""
            />
          </div>
          <p>
            <span className="star-review">&#11088; </span> 4.9{' '}
            <span style={{ color: 'gray', fontSize: '13px' }}>
              (8000 reviews)
            </span>
          </p>
        </div>
        <div className="review-cards">
          <div className="customer-review">
            <img
              className="review-img-top"
              src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Virat_Kohli.jpg"
              alt=""
            />
            <div className="customer-review-text">
              Absoloutly love these products! My skins has never <br />
              felt better. I have used many other brands but <br />
              these products are superior!!!
              <br />
              <br />
              <span className="greater-than-sign-review-card-div">
                <img
                  className="greater-than-sign-review-card"
                  src="https://cdn-user-icons.flaticon.com/51586/51586652/1659010939887.svg?token=exp=1659011849~hmac=480084624888fc0f2d778990892088a8"
                  alt=""
                />
              </span>
              <br />
              <p>
                <span className="star-review">
                  &#11088;&#11088;&#11088;&#11088;&#11088;{'  '}
                </span>{' '}
              </p>
              <p>Emma, USA</p>
              <span className="less-than-sign-review-card-div">
                <img
                  className="less-than-sign-review-card"
                  src="https://cdn-user-icons.flaticon.com/51586/51586652/1659010610900.svg?token=exp=1659011512~hmac=0bae307283ee4c3ff0283c3e0b362aa9"
                  alt=""
                />
              </span>
            </div>
          </div>
          <div className="background-card"></div>
        </div>
      </div>
    </>
  )
}

export default ReviewRewards
