import React from "react";
import { Col } from "react-bootstrap";
import contact from "../../../../assets/images/contact.png";
import email from "../../../../assets/images/email.png";
import phone from "../../../../assets/images/phone.png";
import BtnTitleIcon from "../../../../components/Button/BtnTitleIcon";
import { useContextProvider } from "../../../../context";
import CardHead from "./CardHead";
import "../Information.scss";
import "./styles.scss";

function CardContacts({ contactUs, newContact = true }) {
  const { setOpenDrawer } = useContextProvider();
  if (!newContact) {
    return (
      <div className="card-cont default-height d-flex align-items-center justify-content-center">
        <BtnTitleIcon
          title="Add Contacts"
          onClick={() => {
            setOpenDrawer({ open: true, type: "Add Contacts" });
          }}
        />
      </div>
    );
  }

  return (
    <div
      className="card-cont"
      onClick={() => {
        setOpenDrawer({ type: "Contact", open: true, data: [...contactUs] });
      }}
    >
      <CardHead title="Contact" action="Edit Contacts" icon={contact} />
      <div className="d-flex email-cont">
        <img src={email} alt="email-icon" />
        <span className="email">{contactUs[0]?.email ?? ""}</span>
      </div>
      <div className="d-flex">
        <img src={phone} alt="phone-icon" />
        <span className="email phone">{contactUs[0]?.contact ?? ""}</span>
      </div>
    </div>
  );
}

export default CardContacts;
