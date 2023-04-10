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
          <BtnTitleIcon title="Add hours of operations" onClick={onClick} />
        </div>
      </Col>
    );
  }

  return (
    <Col className="card-wrapper" style={{ marginRight: 0 }} md={6} xl={4}>
      <div className="card-cont">
        <CardHead
          onClick={onClick}
          type="Hours of operations"
          title="Hours of operations"
          icon={business}
        />
        <div className="d-flex flex-column hours-container stm-container ">
          {hoursOfOperation?.hoursOfOperationString.map((item, index) => {
            return (
              <span key={item} className="email margin-text">
                {item}
              </span>
            );
          })}
        </div>
      </div>
    </Col>
  );
}

export default CardHOpration;
