/*eslint-disable */

import React, { useEffect, useState } from "react";
import edit from "../../assets/images/edit.svg";
import "./UpdateMember.scss";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Offcanvas,
} from "react-bootstrap";
import axios from "axios";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DatePickerComp from "../DatePickerComp/DatePickerComp";
import UpdateFields from "./UpdateFields/UpdateFields";
import { GlobalContext } from "../../App";
import { useContext } from "react";

const UpdateMember = ({ api, getDataFunc, editData, isCurrent }) => {
  const [show, setShow] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [probationDate, setProbationDate] = useState(null);
  const { loading, setLoading, msg, setMsg } = useContext(GlobalContext);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const [formValues, setFormValues] = useState({
  //   firstName: editData.firstName,
  //   lastName: editData.lastName,
  //   username: editData.username,
  //   email: editData.email,
  //   phone: editData.phone,
  //   department: editData.department,
  //   designation: editData.designation,
  //   emp_code: editData.emp_code,
  //   location: editData.location,
  // });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormValues((prevInputs) => ({ ...prevInputs, [name]: value }));
  }

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   axios
  //     .put(`${api}/${editData.id}`, {
  //       firstName: formValues.firstName,
  //       lastName: formValues.lastName,
  //       username: formValues.username,
  //       email: formValues.email,
  //       phone: formValues.phone,
  //       department: formValues.department,
  //       designation: formValues.designation,
  //       emp_code: formValues.emp_code,
  //       location: formValues.location,
  //     })
  //     .then((res) => {
  //       getDataFunc();
  //     })
  //     .catch((err) => console.error(err));
  //   handleClose();
  // }

  const [formValues, setFormValues] = useState(editData);

  function handleSubmit(event) {
    setLoading(true)
    setMsg('Updating current team member')
    event.preventDefault();
    axios
      .put(`${api}/${editData.id}`, formValues)
      .then((res) => {
        getDataFunc();
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setLoading(false)
      });
    handleClose();
  }

  return (
    <>
      <div className="add-member">
        <span className="icon-desc">
          <img src={edit} alt="" onClick={isCurrent ? handleShow : null} />
        </span>
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
              <div className="team-member-add">Edit A Team Member</div>
              <div className="sub-title-team">
                Edit in the information below to get it reflected in the table
              </div>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {/* <Form onSubmit={handleSubmit}>
              <FormGroup className="input-div">
                <Form.Label>First Name *</Form.Label>
                <Form.Control
                  value={formValues.firstName}
                  type="text"
                  name="firstName"
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>
              <FormGroup className="input-div">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  value={formValues.lastName}
                  type="text"
                  name="lastName"
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup className="input-div">
                <Form.Label>Personal Email ID *</Form.Label>
                <Form.Control
                  value={formValues.personalEmail}
                  type="text"
                  name="personalEmail"
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>
              <FormGroup className="input-div">
                <Form.Label>Display Email ID *</Form.Label>
                <Form.Control
                  value={formValues.displayEmail}
                  type="text"
                  name="displayEmail"
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>
              <div className="info-text">
                This email will reflect on your employee’s card.
              </div>
              <FormGroup className="input-div">
                <Form.Label>Personal Phone No *</Form.Label>
                <Form.Control
                  value={formValues.phone}
                  type="text"
                  name="phone"
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup className="input-div">
                <Form.Label>Display Phone No *</Form.Label>
                <Form.Control
                  value={formValues.displayPhone}
                  type="text"
                  name="displayPhone"
                  onChange={handleInputChange}
                />
              </FormGroup>
              <div className="info-text">
                This phone number will reflect on your employee’s card.{" "}
              </div>
              <FormGroup className="input-div">
                <Form.Label>Department *</Form.Label>
                <Form.Control
                  value={formValues.department}
                  type="text"
                  name="department"
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>
              <FormGroup className="input-div">
                <Form.Label>Designation *</Form.Label>
                <Form.Control
                  value={formValues.designation}
                  type="text"
                  name="designation"
                  onChange={handleInputChange}
                />
              </FormGroup>

              <FormGroup className="input-div">
                <Form.Label>Employee Code *</Form.Label>
                <Form.Control
                  value={formValues.emp_code}
                  type="text"
                  name="emp_code"
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup className="input-div">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  value={formValues.location}
                  type="text"
                  name="location"
                  onChange={handleInputChange}
                />
              </FormGroup>
              <DatePickerComp
                heading="Start Date *"
                setSelectedDate={setSelectedDate}
                selectedDate={selectedDate}
                required
              />
              <DatePickerComp
                heading="Probation Date *"
                setSelectedDate={setProbationDate}
                selectedDate={probationDate}
                required
              />

              <Button variant="primary" type="submit" className="save-btn">
                Save
              </Button>
            </Form> */}
            <UpdateFields editData={editData} handleClose={handleClose} />
          </Offcanvas.Body>
        </div>
      </Offcanvas>
    </>
  );
};

export default UpdateMember;
