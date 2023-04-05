import React from "react";
import "./addresspopup.scss";
import { useState } from "react";
import { Offcanvas, Table } from "react-bootstrap";
import SelectAddress from "./SelectAddress/SelectAddress";
import AddButton from "./AddButton/AddButton";

const AddressPopup = ({ show, handleClose }) => {
  return (
    <div className="addresspopup">
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        className="address-popup"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Addresses</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="popup-container">
            <AddButton/>
            <SelectAddress
              title={"Ship To"}
              name={"ship-address"}
              value1={"s-address1"}
              value2={"s-address2"}
            />
            <SelectAddress
              title={"Bill To"}
              name={"bill-address"}
              value1={"b-address1"}
              value2={"b-address2"}
            />
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default AddressPopup;
