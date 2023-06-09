import React from "react";
import contact from "../../../../assets/images/contact.png";
import email from "../../../../assets/images/email.png";
import phone from "../../../../assets/images/phone.png";
import CardHead from "./CardHead";
import "../Information.scss";
import "./styles.scss";

function CardContacts({ contactUs, length, onClick, type, title, children }) {
  return (
    <div className="card-cont">
      <CardHead
        title={title}
        type={type}
        action="Edit Contacts"
        icon={contact}
        onClick={onClick}
        data={contactUs}
      />
      {contactUs.length ? (
        <div>
          <div className="d-flex email-cont align-items-center">
            <img className="" height={25} src={email} alt="email-icon" />
            <div className="d-flex justify-content-between align-items-center flex-grow-1 overflow-hidden">
              <span className="email email-overflow-container">
                {contactUs?.[0].email ?? ""}
              </span>
              {length > 1 ? (
                <div className="d-flex contacts-count align-items-center justify-content-center">
                  <span className="email count-text-color m-0">
                    +{length - 1}
                  </span>
                </div>
              ) : null}
            </div>
          </div>
          <div className="d-flex">
            <img height={25} src={phone} alt="phone-icon" />
            <span className="email phone">{contactUs?.[0].contact ?? ""}</span>
          </div>
        </div>
      ) : (
        <p className="email empty-card-text"> No contacts added yet.</p>
      )}
    </div>
  );
}

export default CardContacts;
