import React from "react";
import { Col } from "react-bootstrap";
import CardHead from "./CardHead";
import business from "../../../../assets/images/business.png";

function CardHOpration({ hoursOfOperation, onClick }) {
  return (
    <Col className="card-wrapper" style={{ marginRight: 0 }} md={6} xl={4}>
      <div className="card-cont">
        <CardHead
          onClick={onClick}
          type="Hours of operations"
          title="Hours of operations"
          icon={business}
        />
        {!hoursOfOperation ||
        hoursOfOperation?.hoursOfOperationObject?.length ? (
          <div className="d-flex flex-column hours-container stm-container ">
            {hoursOfOperation?.hoursOfOperationString.map((item, index) => {
              return (
                <span key={item} className="email margin-text">
                  {item}
                </span>
              );
            })}
          </div>
        ) : (
          <p className="email empty-card-text">
            No hours of operations added yet.
          </p>
        )}
      </div>
    </Col>
  );
}

export default CardHOpration;
