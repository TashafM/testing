import React from "react";
import "./index.css";
import { Modal } from "react-bootstrap";
import cross from "../../assets/images/cross.png";
import BtnTitleCenter from "../Button/BtnTitleCenter";

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
        <Modal.Body className="modalbody">{children}</Modal.Body>
      </Modal>
    </div>
  );
}

export default ModalComponent;
