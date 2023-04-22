import React from "react";
import { Col } from "react-bootstrap";
import quote from "../../../../assets/images/quote.png";
import CardHead from "./CardHead";

function CardCompStatement({ companyStatement, onClick }) {
  return (
    <Col className="card-wrapper" md={6} xl={4}>
      <div className="card-cont stm-card-container">
        <div className=" stm-head-container">
          <CardHead title="Statement" icon={quote} onClick={onClick} />
        </div>
        {companyStatement ? (
          <div className="stm-container">
            <p className="email margin-text">{companyStatement}</p>
          </div>
        ) : (
          <p className="email empty-card-text">No statement added yet.</p>
        )}
      </div>
    </Col>
  );
}

export default CardCompStatement;
