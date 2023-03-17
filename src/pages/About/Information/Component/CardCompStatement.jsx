import React from "react";
import { Col } from "react-bootstrap";
import quote from "../../../../assets/images/quote.png";
import CardHead from "./CardHead";

function CardCompStatement() {
  return (
    <Col className="card-wrapper" md={6} xl={4}>
      <div className="card-cont">
        <CardHead title="Statement" icon={quote} />
        <div>
          <span className="email margin-text">You think it we ink it.</span>
        </div>
      </div>
    </Col>
  );
}

export default CardCompStatement;
