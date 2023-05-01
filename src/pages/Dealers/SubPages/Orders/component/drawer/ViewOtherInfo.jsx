import React from "react";

import { Offcanvas } from "react-bootstrap";
import "../../dealerorders.scss";
import DrawerHead from "../../../../../About/Information/Component/DrawerHead";

function ViewOtherInfo({ show, handleClose, order }) {
  return (
    <Offcanvas
      show={show}
      onHide={handleClose}
      placement="end"
      className="teamMember-add"
    >
      <div className="content">
        <DrawerHead title="Other Information" handleClose={handleClose} />
        <div className="address-field">
          {order.labelInstruction ? (
            <>
              <div className="other-summary-title">Label instruction </div>

              <div className="summary-text">
                {order?.labelInstruction ?? ""}
              </div>
            </>
          ) : (
            ""
          )}
          {order.otherInstruction ? (
            <>
              <div className="other-summary-title order-info-title">
                Other Instruction{" "}
              </div>

              <div className="summary-text">
                {order?.otherInstruction ?? ""}
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </Offcanvas>
  );
}

export default ViewOtherInfo;
