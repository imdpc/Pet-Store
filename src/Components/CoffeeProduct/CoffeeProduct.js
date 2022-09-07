import React from 'react'
import "./CoffeeProduct.css"

const CoffeeProduct = () => {
    return (
        <>
            <div className='div-fr-img-n-text'>
                <img src="https://images.unsplash.com/photo-1530373239216-42518e6b4063?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" className='img-style-fr-product' />
                <div className='hover-content'>
                    <div className='black-div-for-hover'></div>
                    <div className='text-fr-hover'>

                        <h3 className='title-of-product'>Cold Coffee</h3>
                        <p className='price-for-product'>$ 10</p>

                    </div>
                    <div className='btn-div-fr-product-coffee'>
                        <button className='btn-cart' >
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CoffeeProduct