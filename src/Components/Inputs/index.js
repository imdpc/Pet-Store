import React, { useRef } from "react";
import "./style.css";

const Input = (props) => {
  return (
    <>
      {props.type && props.type === "select" ? (
        <>
          <label className="label-for-user-profile-label-only">
            {props.label}
          </label>
          <select
            id="CountryDropdown-for-user-profile-only"
            value={props.value}
            onChange={props.onChange}
          >
          {props.state ? 
            <option  value={""}>
                 Select State
                </option>
          : null}

            {props.cat && props.options && props.options.length > 0
              ? props.options.map((type, index) => (
                <option key={type._id} value={type._id}>
                  {type.name}
                </option>
              ))
              : props.storeType && props.options && props.options.length > 0
                ? props.options.map((type, index) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))
                : null}
          </select>
        </>
      ) : (
        <>
          <label className="label-for-user-profile-label-only">
            {props.label}
          </label>
          <input
            value={props.value}
            type={props.type}
            onChange={props.onChange}
            className="profile-nput-only"
            placeholder={props.placeholder}
            name={props.name}
            readOnly={props.readOnly}
            maxLength={props.maxLength}
          ></input>
        </>
      )}
    </>
  );
};

export default Input;
