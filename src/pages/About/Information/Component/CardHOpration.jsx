import React from "react";
import { Col } from "react-bootstrap";
import CardHead from "./CardHead";
import business from "../../../../assets/images/business.png";
import BtnTitleIcon from "../../../../components/Button/BtnTitleIcon";

function CardHOpration({ hoursOfOperation, onClick }) {
  if (!hoursOfOperation || !hoursOfOperation?.hoursOfOperationObject?.length) {
    return (
      <Col className="card-wrapper" md={6} xl={4}>
        <div className="card-cont default-height d-flex align-items-center justify-content-center">
          <BtnTitleIcon title="Add social links" onClick={onClick} />
        </div>
      </Col>
    );
  }
  localStorage.setItem("usercode", "64134ed79a2fde15a4f93691");

  return (
    <Col
      className="card-wrapper"
      style={{ marginRight: 0 }}
      md={6}
      xl={4}
      onClick={onClick}
    >
      <div className="card-cont">
        <CardHead
          type="Hours of operations"
          title="Hours of operations"
          icon={business}
        />
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
