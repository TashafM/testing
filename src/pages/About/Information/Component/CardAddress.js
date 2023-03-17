import React from "react";
import { Col } from "react-bootstrap";
import location from "../../../../assets/images/location.png";
import CardHead from "./CardHead";

function CardAddress() {
  return (
    <Col className="card-wrapper" md={6} xl={4}>
      <div className="card-cont">
        <CardHead title="Address" icon={location} />
        <div>
          <span className="email margin-text">
            C-1 / 351 / 4 , GIDC Makarpura, Vadodara – 390010, Gujarat, India.
          </span>
        </div>
      </div>
    </Col>
  );
}

export default CardAddress;
