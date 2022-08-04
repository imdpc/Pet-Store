import React from 'react'
import './TargetSale.css'
import downarrow from "../../Assets/down-arrow.png"
const TargetSale = () => {
  return (
    <div className="flex-target-sale-container">
      <div className="width-target-comonent">

        <img

          className="styling-for-img-after-nav"
          src="https://img.freepik.com/premium-photo/white-dog-west-highland-white-terrier-drinking-juice-summer-vacation_96727-2320.jpg?size=338&ext=jpg&ga=GA1.2.821292631.1658831461"
          alt=""

        />

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
            style={{ width: '80px', height: '80px', cursor: "pointer" }}
            src={downarrow}
            alt=""
            srcset=""
          />
        </div>
      </div>
    </div>
  )
}

export default TargetSale
