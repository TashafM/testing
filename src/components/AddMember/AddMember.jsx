/*eslint-disable */

import React, { useEffect, useState } from "react";
import add from "../../assets/images/add.svg";
import "./AddMember.scss";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Offcanvas,
  InputGroup,
} from "react-bootstrap";
import axios from "axios";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DatePickerComp from "../DatePickerComp/DatePickerComp";
import Util from "../UtilityFunctions/UtilityFunctions";

const AddMember = ({ api, getDataFunc }) => {
  const [show, setShow] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [probationDate, setProbationDate] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formValues, setFormValues] = useState([]);
  const myUtil = new Util();

  function handleSubmit(event) {
    event.preventDefault();
    axios.post(api, formValues).then((res) => {
      getDataFunc();
      myUtil.hello();
    });
    handleClose();
  }

  return (
    <>
      <div className="add-member" onClick={handleShow}>
        <span className="icon-desc">
          <img src={add} alt="" />
        </span>
        <span>Add Team Member</span>
      </div>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        className="teamMember-add"
      >
        <div className="content">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <div className="team-member-add">Add A Team Member</div>
              <div className="sub-title-team">
                Fill in the information below to get it reflected in the table
              </div>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Form onSubmit={handleSubmit}>
              <FormGroup className="input-div">
                <Form.Label>First Name *</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  // onChange={handleInputChange}
                  onChange={() => Util.handleChange(event, setFormValues)}
                  required
                />
              </FormGroup>
              <FormGroup className="input-div">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  onChange={() => Util.handleChange(event, setFormValues)}
                />
              </FormGroup>
              <FormGroup className="input-div">
                <Form.Label>Personal Email ID *</Form.Label>
                <Form.Control
                  type="text"
                  name="personalemail"
                  onChange={() => Util.handleChange(event, setFormValues)}
                  // required
                />
              </FormGroup>
              <FormGroup className="input-div">
                <Form.Label>Display Email ID *</Form.Label>
                <Form.Control
                  type="email"
                  name="displayemail"
                  onChange={() => Util.handleChange(event, setFormValues)}
                  // required
                />
              </FormGroup>
              <span>This email will reflect on your employee’s card.</span>

              <FormGroup className="input-div">
                <Form.Label>Personal Phone No *</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  onChange={() => Util.handleChange(event, setFormValues)}
                  // required
                />
              </FormGroup>
              <FormGroup className="input-div">
                <Form.Label>Display Phone No *</Form.Label>
                <Form.Control
                  type="text"
                  name="displayPhone"
                  onChange={() => Util.handleChange(event, setFormValues)}
                />
              </FormGroup>
              <FormGroup className="input-div">
                <Form.Label>Department *</Form.Label>
                <Form.Control
                  type="text"
                  name="department"
                  onChange={() => Util.handleChange(event, setFormValues)}
                />
              </FormGroup>
              <FormGroup className="input-div">
                <Form.Label>Designation *</Form.Label>
                <Form.Control
                  type="text"
                  name="designation"
                  onChange={() => Util.handleChange(event, setFormValues)}
                />
              </FormGroup>
              <FormGroup className="input-div">
                <Form.Label>Employee Code *</Form.Label>
                <Form.Control
                  type="text"
                  name="emp_code"
                  onChange={() => Util.handleChange(event, setFormValues)}
                  // required
                />
              </FormGroup>
              <FormGroup className="input-div">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  name="location"
                  onChange={() => Util.handleChange(event, setFormValues)}
                />
              </FormGroup>
              <div className="d-flex justify-content-between">
                <DatePickerComp heading={"Start Date *"} />
                <DatePickerComp heading={"Probation Date *"} />
              </div>
              <Button variant="primary" type="submit" className="save-btn">
                Save
              </Button>
            </Form>
          </Offcanvas.Body>
        </div>
      </Offcanvas>
    </>
  );
};

export default AddMember;
