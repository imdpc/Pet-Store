import React from 'react'
import './TargetSale.css'
const TargetSale = () => {
  return (
    <div className="flex-target-sale-container">
      <div className="width-target-comonent">
        <div className="image-of-pet-after-nav">
          <img

            className="styling-for-img-after-nav"
            src="https://img.freepik.com/premium-photo/white-dog-west-highland-white-terrier-drinking-juice-summer-vacation_96727-2320.jpg?size=338&ext=jpg&ga=GA1.2.821292631.1658831461"
            alt=""

          />
        </div>
        <div className="sales-targets">
          <section>
            <h1 className="text-ratings-in-target-sale">200k+</h1>
            <p style={{ fontFamily: 'Acumin Pro' }}>Nuetritional Complete</p>
          </section>
          <section>
            <h1 className="text-ratings-in-target-sale">$5M</h1>
            <p style={{ fontFamily: 'Acumin Pro' }}>Products Sale</p>
          </section>
          <section>
            <h1 className="text-ratings-in-target-sale">96%</h1>
            <p style={{ fontFamily: 'Acumin Pro' }}>Client Satisfication</p>
          </section>
        </div>
        <div className="down-arrow-image-target-section">
          <img
            style={{ width: '50px', height: '50px' }}
            src="https://cdn-icons.flaticon.com/png/128/3416/premium/3416111.png?token=exp=1658835380~hmac=274eb1cd514b9f9320e199a3e9cbb094"
            alt=""
            srcset=""
          />
        </div>
      </div>
    </div>
  )
}

export default TargetSale
