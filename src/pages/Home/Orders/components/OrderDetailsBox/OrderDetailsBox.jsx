import React from "react";
import { Col } from "react-bootstrap";
import "./OrderDetailsBox.scss";
import { prepareAddressString } from "../../../../../components/Utils/Utils";
import BtnTitleCenter from "../../../../../components/Button/BtnTitleCenter";
import arrow from "../../../../../assets/images/arrow-right-red.png";

const OrderDetailsBox = ({ icon, icon2, order, onClick }) => {
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
            Shipping Address :
          </div>
          <div className="full-address">
            {Object.keys(order ?? {}).length
              ? prepareAddressString(order.shippingAddress)
              : ""}
          </div>
          <div className="mobile d-flex address-contact-card justify-content-between align-items-center">
            {order?.shippingAddress?.contactNumber ?? ""}

            <div className="d-flex">
              <BtnTitleCenter title="View all" onClick={onClick} />
              <img
                className="image-icon-other"
                src={arrow}
                alt="arrow-right-icon"
              />
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default OrderDetailsBox;
