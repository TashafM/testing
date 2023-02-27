import React from "react";
import { Col } from "react-bootstrap";
import "./OrderDetailsBox.scss";

const OrderDetailsBox = ({ icon, icon2 }) => {
  return (
    <Col className="order-details-box">
      <div>
        <div className="address">
          {icon && (
            <span>
              <img src={icon} />
            </span>
          )}
          Billing Address :
        </div>
        <div className="full-address">
          28, Rajasthani Udhyog Nagar, G.T. Karnal Road, Delhi - 110033 IN
        </div>
        <div className="mobile">+91-22-28770321</div>
      </div>
      <div>
        <div className="address">
          {icon2 && (
            <span>
              <img src={icon2} />
            </span>
          )}
          Billing Address :
        </div>
        <div className="full-address">
          28, Rajasthani Udhyog Nagar, G.T. Karnal Road, Delhi - 110033 IN
        </div>
        <div className="mobile">+91-22-28770321</div>
      </div>
    </Col>
  );
};

export default OrderDetailsBox;
