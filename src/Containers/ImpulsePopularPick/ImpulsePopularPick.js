import React from 'react'
import "./ImpulsePopularPick.css"
import product from '../../Assets/Impulse/D2805-White.jpg'
import product2 from '../../Assets/Impulse/WDY338-Army.jpg'
import product3 from '../../Assets/Impulse/WTY550-Dark-Heather-Gray.jpg'

import ImpulseProduct from './../../Components/ImpulseProduct/ImpulseProduct';

const ImpulsePopularPick = () => {
    const allimpulseproduct = [
        {
            url: product,
            title: "WHITE V-NECK SHORT SLEEVE TUNIC",
            price: "$39 ",
        },
        {
            url: product2,
            title: "COLOR BLOCK POCKET TEE",
            price: "$39 ",
        }, {
            url: product3,
            title: "DOVE GRAY DOLMAN SLEEVE",
            price: "$50 ",
        },
    ]
    return (
        <>
            <div className='flex-div-for-all-popular-products'>
                <div className='div-for-all-popular-products'>
                    {allimpulseproduct.map((val, index) => (

                        <ImpulseProduct impulseproductdetails={val} />
                    ))}

                </div>
            </div>
        </>
    )
}

export default ImpulsePopularPick