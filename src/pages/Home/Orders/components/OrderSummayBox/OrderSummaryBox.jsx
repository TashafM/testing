import React from "react";
import { Col } from "react-bootstrap";
import "./OrderSummaryBox.scss";

const OrderSummaryBox = () => {
  return (
    <Col className="order-summary-box">
      <div className="box-one">
        <div className="title-text">Other Information :</div>
        <div className="summary-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat,
          architecto sapiente esse repellat ea quae dolor?
        </div>
      </div>
      <div className="order-summary">
        <div className="title-text">Order Summary :</div>
        <div>
          <div className="items-total">
            <div className="summary-heading">Items total</div>
            <div className="summary-amount">INR 1440.0</div>
          </div>
          <div className="taxes">
            <div className="summary-heading">Taxes</div>
            <div className="summary-amount">INR 194.0</div>
          </div>
        </div>
        <hr className="horizontal-line"/>
        <div className="amount-total">
            <div className="total-title">Order Total</div>
            <div className="total-amount">INR 1630.00</div>
        </div>
      </div>
    </Col>
  );
};

export default OrderSummaryBox;
