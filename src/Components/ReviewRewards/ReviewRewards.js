import React from 'react'
import './ReviewRewards.css'

const ReviewRewards = () => {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <div className="review-desc">
          <p className="review-heading">REVIEW & REWARDS</p>
          <p className="customer-count-review">
            Over <span style={{ color: '#124944' }}>80000</span> customers{' '}
            <br />
            with 5 -star reviews
          </p>
          <p>
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
            <span style={{ color: 'gray' }}>(8000 reviews)</span>
          </p>
        </div>
        <div></div>
      </div>
    </>
  )
}

export default ReviewRewards
