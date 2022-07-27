import React from 'react'
import './ReviewRewards.css'

const ReviewRewards = () => {
  return (
    <>

      <p className="review-heading">REVIEWS & REWARDS</p>

      <div style={{ display: 'flex', gap: '250px', }}>
        <div className="review-desc">
          <p className="customer-count-review">
            Over <span style={{ color: '#124944' }}>80000</span> customers{' '}
            <br />
            with 5 -star reviews
          </p>
          <p className='para-after-review-heading'>
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
            <span style={{ color: 'gray', fontSize: "13px" }}>(8000 reviews)</span>
          </p>
        </div>
        <div className="customer-review">
          <p className="customer-review-text">
            Absoloutly love these products! My skins has never <br />
            felt better. I have used many other brands but <br />
            these products are superior!!!
          </p>
          <br />
          <p>
            <span className="star-review">
              &#11088;&#11088;&#11088;&#11088;&#11088;{'  '}
            </span>{' '}
            <p>Emma, USA</p>
          </p>
        </div>
      </div>
    </>
  )
}

export default ReviewRewards
