import React from 'react'
import "./ImpulseProduct.css"

const ImpulseProduct = (props) => {

    return (
        <>

            <div className='div-for-img-and-desc'>
                <div className='div-for-img-and-btn'>
                    <div>
                        <img src={props.impulseproductdetails.url} alt="" className='img-for-product' />
                    </div>
                    {/* hover btn div  */}
                    <div className='hover-btn-div'>
                        <button className='hover-btn'>Quick View</button>
                    </div>
                </div>
                <div className='desc-for-product'>
                    {/* product title  */}
                    <div className='title-div'>
                        <p className='title-of-product'>{props.impulseproductdetails.title}   </p>
                    </div>
                    {/* price-of-product div  */}
                    <div>
                        <p className='price-of-product'> {props.impulseproductdetails.price}
                        </p>
                    </div>

                </div>
            </div>

        </>
    )
}

export default ImpulseProduct