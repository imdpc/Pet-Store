import React from 'react'
import './PetShopFooter.css'
import fimage from '../../Assets/footer-image.png'

const PetShopFooter = () => {
  return (
    <>
      <div className="footer-img">
        {' '}
        <img src={fimage} alt="" style={{ width: '950px', height: '450px' }} />
      </div>
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
        <div>
          <h2>Our Products</h2>
          <br />
          <ul className="footer-second-col">
            <li>Dog Treats</li>
            <li>Adult Dog</li>
            <li>Diets Dog Foods</li>
            <li>Puppy Food</li>
            <li>Special Food</li>
          </ul>
        </div>
        <div>
          {' '}
          <h2>Wagg World</h2>
          <br />
          <ul className="footer-third-col">
            <li>About Wagg</li>
            <li>The Team</li>
            <li>Environment</li>
            <li>News</li>
            <li>Feeding Guide</li>
          </ul>
        </div>
        <div>
          {' '}
          <h2>Resource</h2>
          <br />
          <ul className="footer-fourth-col">
            <li>Download</li>
            <li>Help</li>
            <li>Guides</li>
            <li>Partners Network</li>
            <li>Developers</li>
          </ul>
        </div>
        <div>
          {' '}
          <h2>News Letter</h2>
          <div>
            <div>
              <input
                type="email"
                name=""
                placeholder="Enter Email"
                className="input-email-in-footer"
              />
            </div>
            <div>
              <img
                className="icon-in-search"
                src="https://cdn-icons-png.flaticon.com/512/121/121521.png"
                alt=""
              />
            </div>
          </div>
          <div className="social-media-icons-in-footer">
            <div className="social-media-rounded-div">
              <img
                className="footer-icon-img"
                src="https://cdn-icons-png.flaticon.com/512/160/160154.png"
                alt=""
              />
            </div>
            <div className="social-media-rounded-div">
              <img
                className="footer-icon-img"
                src="https://cdn-icons.flaticon.com/png/512/739/premium/739257.png?token=exp=1658987951~hmac=f98f358fc35ffab77b43eb363d417915"
                alt=""
              />
            </div>
            <div className="social-media-rounded-div">
              <img
                className="footer-icon-img"
                src="https://cdn-icons-png.flaticon.com/512/5968/5968534.png"
                alt=""
              />
            </div>
            <div className="social-media-rounded-div">
              <img
                className="footer-icon-img"
                src="https://cdn-icons-png.flaticon.com/512/1077/1077046.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PetShopFooter
