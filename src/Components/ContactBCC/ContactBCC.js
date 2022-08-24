import React from "react";
import "./ContactBCC.css";
import marker from "../../Assets/img/marker.svg";
import email from "../../Assets/img/email.png";
import phone from "../../Assets/img/phone-call.png";
const ContactBCC = () => {
  return (
    <>
      <div className="flex-contactus-component">
        <div className="for-width-contact-us-component">
          <div className="ebeauty-contact-container">
            {" "}
            <div className="ebeauty-send-us-msg-container">
              <h4>Send us message</h4>
              <div className="send-us-form-one">
                {/* CONTACT Input Fields */}
                <div className="send-us-form-name">
                  <p>NAME</p>
                  <input type="text" placeholder="Enter name" />
                </div>
                <div className="send-us-form-email">
                  <p>EMAIL</p>
                  <input type="text" placeholder="Enter email" />
                </div>
              </div>
              <div className="send-us-form-two">
                <div className="send-us-form-phone">
                  <p>PHONE</p>
                  <input type="text" placeholder="Enter phone number " />
                </div>
                <div className="send-us-form-subject">
                  <p>SUBJECT</p>
                  <input type="text" placeholder="Enter subject" />
                </div>
              </div>
              <div className="send-us-form-three">
                <div className="send-us-form-message">
                  <p>MESSAGE</p>
                  <textarea name="" id="" cols="30" rows="10"></textarea>
                  {/* <input type="textarea" placeholder="Enter your message" /> */}
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
            {/* Contact Details */}
            <div className="ebeauty-contact-us-container">
              <div className="containing-text-and-header-for-tea-time">
                <h3>You can also reach out us on below contact</h3>
                <div className="contains-adreess-mail-phone-info">
                  <div className="address-for-contact-bcc">
                    <img src={marker} alt="" srcset="" />
                    <p>
                      Desi Tea Time Ltd. A1, G Block, Amrutha Enclave, Opp.
                      ICICI Bank, Road No 14, Banjara Hills, Hyderabad - 500
                      034, Telangana.
                    </p>
                  </div>
                  <div className="email-for-contact-bcc">
                    <img src={email} alt="" srcset="" />
                    <p>franchise@teatimegroup.com</p>
                  </div>
                  <div className="phone-for-contact-bcc">
                    <img src={phone} alt="" srcset="" />
                    <p>+91 888 899 9988</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    // </div>
  );
};

export default ContactBCC;
