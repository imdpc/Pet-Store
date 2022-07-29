import React from 'react'
import './ReviewRewards.css'
import greaterthan from '../../Assets/greater-than-symbol.png'
import lessthan from '../../Assets/less-than-symbol.png'


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
                  src={greaterthan}
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
                  src={lessthan} alt=""
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
