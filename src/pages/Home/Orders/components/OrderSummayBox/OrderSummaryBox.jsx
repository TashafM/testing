import React from "react";
import { Col } from "react-bootstrap";
import "./OrderSummaryBox.scss";

const OrderSummaryBox = ({ order }) => {
  const total =
    order && Object.keys(order).length
      ? parseFloat(order?.totalAmount ?? "0.0") +
        parseFloat(order?.taxAmount ?? "0.0")
      : 0.0;
  return (
    <Col className="order-summary-box">
      <div className="internal-div flex-grow-1">
        <div className="box-one flex-grow-1">
          <div className="title-text">Other Information :</div>
          <div className="summary-text">{order?.otherInstruction ?? ""}</div>
        </div>
        <div className="order-summary flex-grow-1">
          <div className="title-text">Order Summary :</div>
          <div>
            <div className="items-total">
              <div className="summary-heading">Items total</div>
              <div className="summary-amount">
                INR {order?.totalAmount ?? "0.0"}
              </div>
            </div>
            <div className="taxes">
              <div className="summary-heading">Taxes</div>
              <div className="summary-amount">INR {order?.taxAmount}</div>
            </div>
          </div>
          <hr className="horizontal-line" />
          <div className="amount-total">
            <div className="total-title">Order Total</div>
            <div className="total-amount">INR {total}</div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default OrderSummaryBox;
