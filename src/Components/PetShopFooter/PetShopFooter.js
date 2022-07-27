import React from 'react'
import './PetShopFooter.css'

const PetShopFooter = () => {
  return (
    <>
      <div className="pet-shop-footer">
        <div className="footer-first-column">
          <h2 style={{ fontFamily: 'Beau Rivage', fontSize: '30px' }}>Wagg</h2>
          <br />
          <p>Our exports are avilable 24/7:</p>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              rowGap: '10px',
            }}
          >
            <p>
              <img
                className="call-img-in-footer"
                src="https://cdn-icons.flaticon.com/png/512/1634/premium/1634473.png?token=exp=1658924298~hmac=6a7647edc775862a17ae1cd5910a1aff"
                alt=""
              />
            </p>

            <p>1-800-672-4399</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <p>
              <img
                className="email-img-in-footer"
                src="https://cdn-icons-png.flaticon.com/512/7852/7852594.png"
                alt=""
              />
            </p>
            <p>waggfood.uk</p>
          </div>
          <div className="footer-btn-group">
            <button type="submit" className="apple-store-btn">
              <span>
                <img
                  className="apple-logo-in-btn"
                  src="https://cdn-icons-png.flaticon.com/512/160/160139.png"
                  alt=""
                />
              </span>
              Download on the <br /> App Store
            </button>
            <button type="submit" className="apple-store-btn">
              <span>
                <img
                  className="apple-logo-in-btn"
                  src="https://cdn-icons-png.flaticon.com/512/6124/6124997.png"
                  alt=""
                />
              </span>
              Download on the <br /> play Store
            </button>
          </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  )
}

export default PetShopFooter
