import React from "react";
import { Col } from "react-bootstrap";
import contact from "../../../../assets/images/contact.png";
import email from "../../../../assets/images/email.png";
import phone from "../../../../assets/images/phone.png";
import CardHead from "./CardHead";

function CardContacts() {
  return (
    <Col className="card-wrapper" md={6} xl={4}>
      <div className="card-cont">
        <CardHead title="Contact" icon={contact} />
        <div className="d-flex email-cont">
          <img src={email} alt="email-icon" />
          <span className="email">demo@elred.com</span>
        </div>
        <div className="d-flex">
          <img src={phone} alt="phone-icon" />
          <span className="email phone">876465366567</span>
        </div>
      </div>
    </Col>
  );
}

export default CardContacts;
