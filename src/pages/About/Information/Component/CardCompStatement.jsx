import React from "react";
import { Col } from "react-bootstrap";
import quote from "../../../../assets/images/quote.png";
import BtnTitleIcon from "../../../../components/Button/BtnTitleIcon";
import CardHead from "./CardHead";

function CardCompStatement({ companyStatement, onClick }) {
  if (!companyStatement) {
    return (
      <Col className="card-wrapper" md={6} xl={4}>
        <div className="card-cont default-height d-flex align-items-center justify-content-center">
          <BtnTitleIcon title="Add social links" onClick={onClick} />
        </div>
      </Col>
    );
  }
  return (
    <Col className="card-wrapper" md={6} xl={4}>
      <div className="card-cont" onClick={onClick}>
        <CardHead title="Statement" icon={quote} onClick={onClick} />
        <div>
          <div className="stm-container">
            <p className="email margin-text">{companyStatement}</p>
          </div>
        </div>
      </div>
    </Col>
  );
}

export default CardCompStatement;
