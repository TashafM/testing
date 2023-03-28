import React from "react";
import contact from "../../../../assets/images/contact.png";
import email from "../../../../assets/images/email.png";
import phone from "../../../../assets/images/phone.png";
import CardHead from "./CardHead";
import "../Information.scss";
import "./styles.scss";

function CardContacts({ contactUs, onClick, type, title, children }) {
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
      <div className="d-flex email-cont">
        <img className="" height={25} src={email} alt="email-icon" />
        <span className="email">{contactUs?.email ?? ""}</span>
      </div>
      <div className="d-flex">
        <img height={25} src={phone} alt="phone-icon" />
        <span className="email phone">{contactUs?.contact ?? ""}</span>
      </div>
      {children}
    </div>
  );
}

export default CardContacts;
