import React from 'react'
import "./ImpulseProduct.css"
import product from '../../Assets/Impulse/D2805-White.jpg'

const ImpulseProduct = () => {
    return (
        <>

            <div className='div-for-img-and-desc'>
                <div className='div-for-img-and-btn'>
                    <img src={product} alt="" className='img-for-product' />
                    {/* hover btn div  */}
                    <div className='hover-btn-div'>
                        <button className='hover-btn'>Quick View</button>
                    </div>
                </div>
                <div className='desc-for-product'>
                    {/* product title  */}
                    <div className='title-div'>
                        <p className='title-of-product'>WHITE V-NECK SHORT SLEEVE  </p>
                    </div>
                    {/* price-of-product div  */}
                    <div>
                        <p className='price-of-product'> <span style={{ textDecorationLine: "line-through" }}>$49</span>&nbsp; $39 Save $10
                        </p>
                    </div>

                </div>
            </div>

        </>
    )
}

export default ImpulseProduct