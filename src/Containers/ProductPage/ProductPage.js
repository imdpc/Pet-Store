import React from 'react'
import './ProductPage.css'
import Product from './../../Components/Product/Product'
import bg from '../../Assets/ProductPageimg/paul-hanaoka-rYchmOEzWlo-unsplash.jpg'

import bodybelt from '../../Assets/ProductPageimg/Accessories/bodybelt-removebg-preview.png'
import neckbelt from '../../Assets/ProductPageimg/Accessories/neckbelt-removebg-preview.png'
import shapoo from '../../Assets/ProductPageimg/Accessories/waterless_dog_shampoo-removebg-preview.png'
import comb from '../../Assets/ProductPageimg/Accessories/comb_for_dog_cat-removebg-preview.png'
import Nav from './../../Components/Nav/Nav'
import PetShopFooter from '../../Components/PetShopFooter/PetShopFooter'

const ProductPage = () => {
  const allproduct = [
    {
      _id: '1',
      name: 'Body belt',
      food_type: 'ALL Dog Size',
      url: bodybelt,
      cat: "asdad",
      price: 60.0,
    },
    {
      _id: '2',
      name: 'Neck Belt',
      food_type: 'Dog Treats',
      url: neckbelt,
      cat: "asdad",
      price: 17.0,
    },
    {
      _id: '3',
      name: 'Waterless shampoo',
      food_type: 'ALL Dog ',
      url: shapoo,
      cat: "asdad",
      price: 60.0,
    },
    {
      _id: '4',
      name: 'Comb for dog & cat',
      food_type: 'ALL Dog Size',
      url: comb,
      cat: "asdad",
      price: 60.0,
    },
    {
      _id: '5',
      name: 'Wagg Lamb Chops',
      food_type: 'ALL Dog Size',
      url:
        'https://waggfoods.com/assets/images/products/_productImage1xWebp/137/wagg_tasty_bones_150g.webp',

      price: 60.0,
    },
    {
      _id: '6',
      name: 'Wagg Lamb Chops',
      food_type: 'ALL Dog Size',
      url:
        'https://waggfoods.com/assets/images/products/_productImage1xWebp/137/wagg_tasty_bones_150g.webp',

      price: 60.0,
    },
    {
      _id: '6',
      name: 'Wagg Lamb Chops',
      food_type: 'ALL Dog Size',
      url:
        'https://waggfoods.com/assets/images/products/_productImage1xWebp/137/wagg_tasty_bones_150g.webp',

      price: 60.0,
    },
    {
      _id: '6',
      name: 'Wagg Lamb Chops',
      food_type: 'ALL Dog Size',
      url:
        'https://waggfoods.com/assets/images/products/_productImage1xWebp/137/wagg_tasty_bones_150g.webp',

      price: 60.0,
    },
    {
      _id: '6',
      name: 'Wagg Lamb Chops',
      food_type: 'ALL Dog Size',
      url:
        'https://waggfoods.com/assets/images/products/_productImage1xWebp/137/wagg_tasty_bones_150g.webp',

      price: 60.0,
    },
  ]
  return (
    <>
      <Nav />
      <div className="bg-and-heading">
        <div className="bgcolor">
          <h2>All Store</h2>
        </div>
      </div>
      <div className="flex-div-for-products">
        {/* fixed side navbar for products  */}

        <div className="sidenav-for-product">
          <div className="sidenav-position">
            <ul className="side-nav-content">
              <h2>Shop</h2>
              <li>Accessories</li>
              <li>Food & Nutrition</li>
              <li>Grooming</li>
              <li>Vaccination</li>
            </ul>
          </div>
        </div>
        {/* all products call by component  */}
        <div className="all-product-for-sell">
          {allproduct.map((val, index) => (
            <Product productDetail={val} />
          ))}
        </div>
      </div>
      <div style={{ marginTop: '25px' }}>
        <PetShopFooter />
      </div>
    </>
  )
}

export default ProductPage
