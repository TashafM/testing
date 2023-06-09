import React from "react";
import "./OrderDetailsBox.scss";
import { prepareAddressString } from "../../../../../components/Utils/Utils";
import BtnTitleCenter from "../../../../../components/Button/BtnTitleCenter";
import arrow from "../../../../../assets/images/arrow-right-red.png";
import billing from "../../../../../assets/images/billing.png";
import shipping from "../../../../../assets/images/shipping.png";

const OrderDetailsBox = ({ order, onClick, onClickOther }) => {
  return (
    <div className="row address-card-main">
      <div className="col-6 ">
        <div
          className="d-flex address-card-container "
          onClick={() => {
            // setShowAddress(true);
          }}
        >
          <div className=" flex-grow-1 detail-top-card width-50 ">
            <div className="address-head d-flex">
              <img
                src={billing}
                className="icon-address-head"
                alt="billing address"
              />
              <p className="m-0">Billing Address :</p>
            </div>
            <div className="address-field">
              <p className="m-0 over-flow-text ">
                {prepareAddressString(order?.billingAddress ?? {})}
              </p>
              <p className="m-0">
                {order?.billingAddress?.contactNumber ?? ""}
              </p>
            </div>
          </div>
          <div className=" flex-grow-1  detail-top-card width-50 ">
            <div className=" flex-grow-1 ">
              <div className="address-head d-flex">
                <img
                  src={shipping}
                  className="icon-address-head"
                  alt="billing address"
                />
                <p className="m-0">Shipping Address :</p>
              </div>
              <div className="address-field">
                <p className="m-0 over-flow-text">
                  {prepareAddressString(order?.shippingAddress ?? {})}
                </p>
                <div className="mobile d-flex address-contact-card justify-content-between align-items-center">
                  <p className="m-0">
                    {order?.shippingAddress?.contactNumber ?? ""}
                  </p>
                  <div className="d-flex align-items-center ">
                    <BtnTitleCenter title="View all" onClick={onClick} />
                    <img
                      className="imge-icon-red"
                      src={arrow}
                      alt="arrow-right"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-6 ">
        <div className="d-flex address-card-container ">
          <div className=" flex-grow-1 detail-top-card width-50 ">
            <div className=" flex-grow-1 ">
              <div className="address-head d-flex">
                <p className="order-summary-text">Other information :</p>
              </div>
              <div className="address-field address-contact-card">
                <p className="m-0 d-flex justify-content-between align-items-center over-flow-text over-flow-text-other">
                  {order.otherInstruction}
                  {order.otherInstruction || order.labelInstruction ? (
                    <BtnTitleCenter title={"See all"} onClick={onClickOther} />
                  ) : null}
                </p>
              </div>
            </div>
          </div>
          <div className=" flex-grow-1  detail-top-card width-50 ">
            <div className="address-head d-flex ">
              <p className="order-summary-text">Order summary:</p>
            </div>
            <div className="address-field">
              <div className="d-flex justify-content-between">
                <p className="m-0">Items total</p>
                <p className="m-0">
                  {order?.currency?.symbol} {order?.itemsTotal ?? "0.0"}
                </p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="m-0">Taxes</p>
                <p className="m-0">
                  {order?.currency?.symbol} {order?.taxAmount ?? "0.0"}
                </p>
              </div>
              <div className="d-flex justify-content-between total-container-div">
                <p className="m-0">Total Price</p>
                <p className="m-0">
                  {order?.currency?.symbol} {order?.totalAmount}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsBox;
