import React, { useState } from 'react'
import './Review.css'
import greaterthan from '../../Assets/greater-than-symbol.png'
import lessthan from '../../Assets/less-than-symbol.png'

const Review = () => {
  const [activeTab, setActiveTab] = useState(0)

  const cards = [
    {
      title:
        'Absoloutly love these products! My skins has never felt better. I have used many other brands butthese products are superior!!!',
      imgUrl:
        'https://upload.wikimedia.org/wikipedia/commons/7/7e/Virat_Kohli.jpg',
      starsimgUrl: 'https://cdn-icons-png.flaticon.com/512/2107/2107957.png ',
      name: 'Emma, USA',
    },
    {
      title:
        'Absoloutly love these products! My skins has never felt better. I have used many other brands butthese products are superior!!!',

      imgUrl:
        'https://assets.gqindia.com/photos/5e8485a922867b0008960729/1:1/w_1080,h_1080,c_limit/MS-Dhoni-net-worth.jpg',
      stars: '&#11088;&#11088;&#11088;',
      name: 'Prasad, India',
    },
    {
      title:
        'Absoloutly love these products! My skins has never felt better. I have used many other brands butthese products are superior!!!',
      imgUrl:
        'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/322600/322697.png',
      stars: '&#11088;&#11088;&#11088;',
      name: 'Akash, India',
    },
  ]

  return (
    <>
      <div className="review-cards">
        <div className="customer-review">
          <img
            className="review-img-top"
            src={cards[activeTab].imgUrl}
            alt=""
          />

          <div className="customer-review-text">
            {cards[activeTab].title}
            <br />
            <br />
            <div className="greater-and-lessthan-sign-div">
              <span className="greater-than-sign-review-card-div">
                <img
                  className="greater-than-sign-review-card"
                  src={greaterthan}
                  alt=""
                  onClick={() =>
                    setActiveTab(
                      activeTab === cards.length - 1 ? 0 : activeTab + 1,
                    )
                  }
                />
              </span>
              <br />
              <p>
                <span className="star-review">
                  {/* <img src={cards[activeTab].starsimgUrl}></img> */}
                </span>{' '}
              </p>

              <span className="less-than-sign-review-card-div">
                <img
                  className="less-than-sign-review-card"
                  src={lessthan}
                  alt=""
                  onClick={() =>
                    setActiveTab(
                      activeTab === 0 ? activeTab + 1 : activeTab - 1,
                    )
                  }
                />
              </span>
            </div>
            {cards[activeTab].name}
          </div>
        </div>
        <div className="background-card"></div>
      </div>
    </>
  )
}

export default Review
