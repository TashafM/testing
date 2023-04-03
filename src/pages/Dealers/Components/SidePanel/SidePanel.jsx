import React from "react";
import "./sidepanel.scss";
import { Button, Offcanvas } from "react-bootstrap";
import LeftSide from "../LeftSide/LeftSide";

const SidePanel = ({ show, handleClose, handleShow }) => {
  return (
    <div className="sidepanel">
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        className="dm"
      >
        {/* <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header> */}
        <Offcanvas.Body>
          {/* Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc. */}
          <div className="divided-div">
            <div className="div-1">
                <LeftSide/>
            </div>
            <div className="div-2">Order List</div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default SidePanel;
