import React from "react";
import { useState } from "react";
import './otherinstructions.scss'
import { Button, Form, Offcanvas, Table } from "react-bootstrap";
import ItemRow from "../ItemRow/ItemRow";

const OtherInstructions = ({ show, handleClose }) => {
  return (
    <div className="sidepanel">
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        className="instructions"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Other Instructions</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="instruction-div">
            <Form className="inst-form">
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label className="title-text">Lable Instruction</Form.Label>
                <Form.Control as="textarea" rows={8} placeholder="Write here..." className="writing-space"/>
              </Form.Group>
            </Form>
            <Form className="inst-form">
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label className="title-text">Other Instruction</Form.Label>
                <Form.Control as="textarea" rows={8} placeholder="Write here..." className="writing-space"/>
              </Form.Group>
            </Form>

            <Button className="save-btn some-margin" onClick={handleClose}>Save</Button>
          </div>
          {/* Some text as placeholder. In real life you can have the elements you
              have chosen. Like, text, images, lists, etc. */}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default OtherInstructions;
