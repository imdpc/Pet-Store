import React from "react";
import ContactBCC from "../../Components/ContactBCC/ContactBCC";
import "./ContactUsBCC.css";
const ContactUsBCC = () => {
  return (
    <>
      {/* screen for contact us BCC */}
      <div className="flex-for-heading-contact-bcc">
        {/* width set for contact us */}
        <div className="width-for-contact-us-bcc">
          <div className="heading-wanna-talk-us-for-contact">
            <h1>Wanna Talk to Us?</h1>
            <p>
              We Are Sure You Have Questions Which Deserve Answers…! Let Us Know
              How We Can Improve Your Favorite Tea..!
            </p>
          </div>
        </div>
      </div>
      {/* main flex container for contact us */}
      <div className="flex-for-contact-us-bcc">
        {/* width set for contact us */}
        <div className="width-for-contact-us-bcc">
          {/* <div className="heading-wanna-talk-us-for-contact">
            <h1>Wanna Talk to Us?</h1>
            <p>
              We Are Sure You Have Questions Which Deserve Answers…! Let Us Know
              How We Can Improve Your Favorite Tea..!
            </p>
          </div> */}
          <div className="contact-us-bcc-component-call">
            <ContactBCC />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsBCC;
