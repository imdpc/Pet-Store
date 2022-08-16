import React from "react";
import "./DawnProduct.css";
import DawnProductimg from "../../Assets/img/product for dawn component";
const DawnProduct = () => {
  return (
    <>
      {/* Component for one of the product in PetStore App */}
      {/* main flex div for the product */}
      <div className="flex-container-for-dawn-product">
        {/* width of our product */}
        <div className="width-set-for-the-product">
          {/* div for image of the product */}
          <div className="img-of-the-product-in-dawn">
            {/* img of the product */}
            <div className="img-of-product">
              <img src={DawnProductimg} alt="" srcset="" />
            </div>
          </div>
          {/* price details and the name of the products */}
          <div className="details-of-the-product">
            {/* name of the product */}
            <div className="name-of-the-product">
              <p>Helixkdvlnsvnkfnlnfnvnfkvnfk</p>
            </div>
            {/* price details of the product */}
            <div className="price-of-the-product">
              <p>$1000 CAD</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DawnProduct;
