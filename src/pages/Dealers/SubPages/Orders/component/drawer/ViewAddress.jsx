import React from "react";

import { Offcanvas } from "react-bootstrap";
import DrawerHead from "../../../../../About/Information/Component/DrawerHead";
import billing from "../../../../../../assets/images/billing.png";
import { prepareAddressString } from "../../../../../../components/Utils/Utils";

function ViewAddress({ show, handleClose, order }) {
  return (
    <Offcanvas
      show={show}
      onHide={handleClose}
      placement="end"
      className="teamMember-add"
    >
      <div className="content">
        <DrawerHead title="Addresses" handleClose={handleClose} />
        <div className=" flex-grow-1 detail-top-card ">
          <div className="address-head d-flex">
            <p className="m-0">Billing Address :</p>
          </div>
          <div className="address-field">
            <p className="m-0  ">
              {prepareAddressString(order?.billingAddress ?? {})}
            </p>
            <p className="m-0"> {order?.billingAddress?.contactNumber ?? ""}</p>
          </div>
        </div>
        <hr />

        <div className=" flex-grow-1 detail-top-card ">
          <div className="address-head d-flex">
            <p className="m-0">Shipping Address :</p>
          </div>
          <div className="address-field">
            <p className="m-0 over-flow-text">
              {prepareAddressString(order?.shippingAddress ?? {})}
            </p>
            <p className="m-0">{order?.shippingAddress?.contactNumber ?? ""}</p>
          </div>
        </div>
      </div>
    </Offcanvas>
  );
}

export default ViewAddress;
