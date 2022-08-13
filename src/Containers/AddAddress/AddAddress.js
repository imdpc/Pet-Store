import React, { useState, useEffect } from "react";
import Input from "../Inputs";
import "./AddAddress.css";
// import { useSelector, useDispatch } from "react-redux";
// import { StateLists } from "../../Data";
// import { userAddressAction } from "../../redux/action/auth.action";
import MessagePopup from "../ErrorPopup";

const AddAddress = (props) => {
  // const auth = useSelector((state) => state.auth);
  // const [addressHouseName, setAddressHouseName] = useState(
  //   auth.user && auth.user.addressHouseName ? auth.user.addressHouseName : ""
  // );
  // const [addressAreaName, setAddressAreaName] = useState(
  //   auth.user && auth.user.addressAreaName ? auth.user.addressAreaName : ""
  // );
  // const [addressState, setAddressState] = useState(
  //   auth.user && auth.user.addressState ? auth.user.addressState : ""
  // );
  // const [addressCity, setAddressCity] = useState(
  //   auth.user && auth.user.addressCity ? auth.user.addressCity : ""
  // );
  // const [addressPinCode, setAddressPinCode] = useState(
  //   auth.user && auth.user.addressPinCode ? auth.user.addressPinCode : ""
  // );
  // const [addressNearbyLocation, setAddressNearbyLocation] = useState(
  //   auth.user && auth.user.addressNearbyLocation
  //     ? auth.user.addressNearbyLocation
  //     : ""
  // );
  // const [addressName, setAddressName] = useState(
  //   auth.user && auth.user.addressName ? auth.user.addressName : ""
  // );

  // const [addressMobileNumber, setAddressMobileNumber] = useState(
  //   auth.user && auth.user.addressMobileNumber
  //     ? auth.user.addressMobileNumber
  //     : auth.user.loginId
  //     ? auth.user.loginId
  //     : ""
  // );
  // const [showErrorMsg, setShowErrorMsg] = useState(false);
  // const [submit, setSubmit] = useState(false);

  // const [showErrorModal, setShowErrorModal] = useState(false);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if (submit && !auth.loading && auth.error === "") {
  //     setSubmit(false);
  //     return props.saveAddress;
  //   }
  //   if (submit && !auth.loading && auth.error === "") {
  //     setSubmit(false);
  //     return setShowErrorModal(true);
  //   }
  // }, [auth, submit]);

  // const saveAddress = (e) => {
  //   e.preventDefault();

  //   if (
  //     addressHouseName.length < 3 ||
  //     addressAreaName.length < 3 ||
  //     addressState === "" ||
  //     addressCity === "" ||
  //     addressPinCode === "" ||
  //     addressName === "" ||
  //     addressMobileNumber.toString().length !== 10
  //   ) {
  //     return setShowErrorMsg(true);
  //   }
  //   const from = {
  //     addressAddress: addressHouseName + "-" + addressAreaName,
  //     addressAreaName,
  //     addressHouseName,
  //     addressCity,
  //     addressState,
  //     addressPinCode,
  //     addressNearbyLocation,
  //     addressMobileNumber,
  //     addressName,
  //   };

  //   setSubmit(true);
  //   setShowErrorMsg(false);
  //   dispatch(userAddressAction(from));
  // };

  // const renderErrorMsg = (msg) => {
  //   return <div className="error-msg-in-red">{msg}</div>;
  // };

  return (
    <>
      <div className="your-bag-dropdown">
        {" "}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <p className="Select-adreess-header-cart">Select Delivery Address</p>{" "}
        </div>
      </div>
      <div className="border-for-box-of-add-daress">
        <h2 className="header-sanmll-categ">Contact Details</h2>
        <div className="div-for-all-input-in-add-address">
          <div className="padding-for-input-add-address">
            <Input
              label={"Name"}
              placeholder={"Your Full Name"}
              // value={addressName}

              // onChange={(e) => setAddressName(e.target.value)
              // }
            />
            {/* {showErrorMsg && addressName === ""
              ? renderErrorMsg("Enter valid name")
              : null} */}
          </div>
          <div className="padding-for-input-add-address">
            <Input
              label={"Phone Number"}
              placeholder={"Your Phone Number"}
              // value={addressMobileNumber.toString()}
              // onChange={(e) =>
              //   setAddressMobileNumber(e.target.value.replace(/\D/g, ""))
              // }
              // maxLength={10}
            />
            {/* {showErrorMsg && addressMobileNumber.toString().length !== 10
              ? renderErrorMsg("Enter valid phone number")
              : null} */}
          </div>
        </div>
        <h2 className="header-sanmll-categ">Address</h2>
        <div className="div-for-all-input-in-add-address">
          <div className="padding-for-input-add-address">
            <Input
              label={"House no./ Building Name"}
              placeholder={"House no. / Building Name"}
              // value={addressHouseName}
              // onChange={(e) => setAddressHouseName(e.target.value)}
            />
            {/* {showErrorMsg && addressHouseName.length < 3
              ? renderErrorMsg("Enter valid house name")
              : null} */}
          </div>
          <div className="padding-for-input-add-address">
            <Input
              label={"Road Name / Area / Colony"}
              placeholder={"Road Name / Area / Colony"}
              // value={addressAreaName}
              // onChange={(e) => setAddressAreaName(e.target.value)}
            />
            {/* {showErrorMsg && addressAreaName.length < 3
              ? renderErrorMsg("Enter valid area name")
              : null} */}
          </div>

          <div className="flexbo-ibusnodl">
            <div className="state-city-plkm">
              <Input
                label={"City"}
                placeholder={"Your City"}
                // value={addressCity}
                // onChange={(e) => setAddressCity(e.target.value)}
              />
              {/* {showErrorMsg && addressCity === ""
                ? renderErrorMsg("Enter valid city name")
                : null} */}
            </div>
            <div className="state-city-plkm">
              <Input
                label={"State"}
                placeholder={"Your State"}
                // value={addressState}
                // onChange={(e) => setAddressState(e.target.value)}
                type="select"
                // options={StateLists}
                // cat={true}
                // state={true}
              />
              {/* {showErrorMsg && addressState === ""
                ? renderErrorMsg("Enter valid state name")
                : null} */}
            </div>
          </div>
          <div className="padding-for-input-add-address">
            <Input
              label={"Pincode"}
              placeholder={"Your Pincode"}
              // value={addressPinCode}
              // onChange={(e) => setAddressPinCode(e.target.value)}
            />

            {/* {showErrorMsg && addressPinCode === ""
              ? renderErrorMsg("Enter valid  pincode")
              : null} */}
          </div>

          <div className="padding-for-input-add-address">
            <Input
              label={"Nearby Location (optional)"}
              placeholder={"Your Nearby Location (optional)"}
              // value={addressNearbyLocation}
              // onChange={(e) => setAddressNearbyLocation(e.target.value)}
            />
          </div>
          <div style={{ marginTop: "2em" }}>
            {/* {submit ? ( */}
            <button className="savandcontinueaddress">Please wait...</button>
            {/* // ) : ( */}
            <button
              className="savandcontinueaddress"
              //  onClick={saveAddress}
            >
              Save Address
            </button>
            {/* )} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddAddress;
