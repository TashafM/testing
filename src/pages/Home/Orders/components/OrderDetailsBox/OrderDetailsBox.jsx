import React from "react";
import { Col } from "react-bootstrap";
import "./OrderDetailsBox.scss";
import { prepareAddressString } from "../../../../../components/Utils/Utils";

const OrderDetailsBox = ({ icon, icon2, order }) => {
  return (
    <Col className="order-details-box">
      <div className="display-desktop">
        <div className="add-1">
          <div className="address">
            {icon && (
              <span>
                <img src={icon} alt="icon" />
              </span>
            )}
            Billing Address :
          </div>
          <div className="full-address">
            {Object.keys(order ?? {}).length
              ? prepareAddressString(order.billingAddress)
              : ""}
          </div>
          <div className="mobile">
            {order?.billingAddress?.contactNumber ?? ""}
          </div>
        </div>
        <div className="add-2">
          <div className="address">
            {icon2 && (
              <span>
                <img src={icon2} alt="icon" />
              </span>
            )}
            Billing Address :
          </div>
          <div className="full-address">
            {Object.keys(order ?? {}).length
              ? prepareAddressString(order.shippingAddress)
              : ""}
          </div>
          <div className="mobile">
            {order?.shippingAddress?.contactNumber ?? ""}
          </div>
        </div>
      </div>
    </Col>
  );
};

export default OrderDetailsBox;
