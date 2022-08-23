import React from "react";
import "../Contact/Contact.css";
const Contact = () => {
  return (
    <>
      <div className="ebeauty-contact-container">
        {" "}
        {/* Contact Details */}
        <div className="ebeauty-contact-us-container">
          <h1>Tea Time Group</h1>
          <p>
            Yes, we are entrepreneurs too..! Hence we know all about the desire
            to have your own business. At the same time, being in business for
            yourself doesn’t mean you have to be in it by yourself…! And this
            describes our approach to franchisee support. It is your business in
            your community. We want to offer you all the resources that our most
            successful franchises use to create their winning formulae. Our job
            is to get you to the dance, so you can shake your groove thing…!
          </p>
        </div>
        <div className="ebeauty-send-us-msg-container">
          <h4>Send us message</h4>
          <div className="send-us-form-one">
            {/* CONTACT Input Fields */}
            <div className="send-us-form-name">
              <p>NAME</p>
              <input type="text" placeholder="Enter name" />
              <hr />
            </div>
            <div className="send-us-form-email">
              <p>EMAIL</p>
              <input type="text" placeholder="Enter email" />
              <hr />
            </div>
          </div>
          <div className="send-us-form-two">
            <div className="send-us-form-phone">
              <p>PHONE</p>
              <input type="text" placeholder="Enter phone number " />
              <hr />
            </div>
            <div className="send-us-form-subject">
              <p>SUBJECT</p>
              <input type="text" placeholder="Enter subject" />
              <hr />
            </div>
          </div>
          <div className="send-us-form-three">
            <div className="send-us-form-message">
              <p>MESSAGE</p>
              <input type="textarea" placeholder="Enter your message" />
              <hr />
            </div>
          </div>
          <div className="send-us-form-button">
            {/* <div className="send-us-form-button-reset">
              <button>RESET</button>
            </div> */}
            <div className="send-us-form-button-submit">
              <button>SUBMIT</button>
            </div>
          </div>
        </div>
      </div>
    </>
    // </div>
  );
};

export default Contact;
