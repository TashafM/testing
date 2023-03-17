import React from "react";
import { Col } from "react-bootstrap";
import CardHead from "./CardHead";
import business from "../../../../assets/images/business.png";

function CardHOpration() {
  return (
    <Col className="card-wrapper" style={{ marginRight: 0 }} md={6} xl={4}>
      <div className="card-cont">
        <CardHead title="Hours of operations" icon={business} />
        <div>
          <span className="email margin-text">
            Monday To Friday - 09:00 Am to 06: 00 Pm
          </span>
        </div>
      </div>
    </Col>
  );
}

export default CardHOpration;
