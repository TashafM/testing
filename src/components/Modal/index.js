import React, { useState } from "react";
import "./index.css";
import { Modal } from "react-bootstrap";
import cross from "../../assets/images/cross.png";

function ModalComponent({ show, close, title, children }) {
  return (
    <div>
      <Modal
        size="lg"
        show={show}
        onHide={close}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-content-container"
      >
        <Modal.Body className="modalbody">
          <div className="d-flex justify-content-between mb-4">
            <div>
              <p>{title}</p>
            </div>
            <div>
              <img
                src={cross}
                alt="image"
                onClick={() => close()}
                className="crossCloseButton"
              />
            </div>
          </div>
          {children}
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ModalComponent;
