import React from "react";

import { Offcanvas } from "react-bootstrap";
import DrawerHead from "../../../../../About/Information/Component/DrawerHead";

function ViewOtherInfo({ show, handleClose }) {
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
          <p className="m-0 ">
            Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. litora torquent per conubia nostra, per inceptos
            himenaeos. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. litora torquent per conubia
            nostra, per inceptos himenaeos. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos. litora
            torquent per conubia nostra, per inceptos himenaeos.
          </p>
        </div>
      </div>
    </Offcanvas>
  );
}

export default ViewOtherInfo;
