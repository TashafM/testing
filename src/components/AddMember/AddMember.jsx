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
import Multiselect from "multiselect-react-dropdown";

const AddMember = ({ api, getDataFunc }) => {
  const [show, setShow] = useState(false);
  const [selectedDate, setSelectedDate] = useState(["", "", ""]);
  const [probationDate, setProbationDate] = useState(["", "", ""]);
  const [loading, setLoading] = useState(false);
  const [showRating, setShowRating] = useState(false);
  const [designation, setDesignation] = useState([]);
  const [selectedDesignations, setSelectedDesignations] = useState([]);

  useEffect(() => {
    const getDesignations = () => {
      const accessToken = localStorage.getItem("accessToken");
      axios
        .get("https://dev.elred.io/getDesignations", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((res) => setDesignation(res.data.result));
        // .then((res) => console.log(res.data.result, "qwertyu"));
    };

    getDesignations();
  }, [show]);

  const handleSelect = (selectedList, selectedItem) => {
    setSelectedDesignations(selectedList);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formValues, setFormValues] = useState([]);
  const myUtil = new Util();

  //----------------------
  const probDate = (index, value) => {
    setProbationDate((prevValues) => {
      const newValues = [...prevValues];
      newValues[index] = value;
      return newValues;
    });
  };
  const dateInput = (index, value) => {
    setSelectedDate((prevValues) => {
      const newValues = [...prevValues];
      newValues[index] = value;
      return newValues;
    });
  };
  const rawStartDate = selectedDate.join("/");
  // const [day, month, year] = rawStartDate.split('/');
  // const startDate = `${day.padStart(2, '0')}/${month.padStart(2, '0')}/${year}`;

  const rawEndDate = probationDate.join("/");

  const startDate = formatDate(rawStartDate);
  const endDate = formatDate(rawEndDate);

  function formatDate(dateStr) {
    const [day, month, year] = dateStr.split("/");
    const formattedDateStr = `${day.padStart(2, "0")}/${month.padStart(
      2,
      "0"
    )}/${year}`;
    return formattedDateStr;
  }

  // const dateSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(formattedValue,'date')
  //   console.log(newDate, 'end Date')
  // }
  //-------------------

  function handleSubmit(event) {
    event.preventDefault();
    const data = {
      ...formValues,
      showRating,
      startDate,
      endDate,
      selectedDesignations,
    };
    // axios.post(api, formValues).then((res) => {
    //   getDataFunc();
    //   myUtil.hello();
    // });
    console.log(data, "77777777777777777");
    handleClose();
    setSelectedDate(["", "", ""]);
    setProbationDate(["", "", ""]);
    setShowRating(false);
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
                  name="personalEmail"
                  onChange={() => Util.handleChange(event, setFormValues)}
                  required
                />
              </FormGroup>
              <FormGroup className="input-div">
                <Form.Label>Display Email ID *</Form.Label>
                <Form.Control
                  type="email"
                  name="displayEmail"
                  onChange={() => Util.handleChange(event, setFormValues)}
                  required
                />
              </FormGroup>
              <div className="info-text">
                This email will reflect on your employee’s card.
              </div>

              <FormGroup className="input-div">
                <Form.Label>Personal Phone No *</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  onChange={() => Util.handleChange(event, setFormValues)}
                  required
                />
              </FormGroup>
              <FormGroup className="input-div">
                <Form.Label>Display Phone No *</Form.Label>
                <Form.Control
                  type="text"
                  name="displayPhone"
                  onChange={() => Util.handleChange(event, setFormValues)}
                  required
                />
              </FormGroup>
              <div className="info-text">
                This phone number will reflect on your employee’s card.{" "}
              </div>

              <FormGroup className="input-div">
                <Form.Label>Department *</Form.Label>
                <Form.Control
                  type="text"
                  name="department"
                  onChange={() => Util.handleChange(event, setFormValues)}
                  required
                />
              </FormGroup>
              <FormGroup className="input-div">
                <Form.Label>Designation *</Form.Label>
                <Form.Control
                  type="text"
                  name="designation"
                  onChange={() => Util.handleChange(event, setFormValues)}
                  required
                />
              </FormGroup>
              <FormGroup className="input-div">
                <Form.Label>Employee Code *</Form.Label>
                <Form.Control
                  type="text"
                  name="emp_code"
                  onChange={() => Util.handleChange(event, setFormValues)}
                  required
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
                <DatePickerComp
                  heading={"Start Date *"}
                  dateInput={dateInput}
                  selectedDate={selectedDate}
                />
                <DatePickerComp
                  heading={"Probation Date *"}
                  dateInput={probDate}
                  selectedDate={probationDate}
                />
              </div>

              <div>
                <input
                  type="checkbox"
                  checked={showRating}
                  onChange={() => setShowRating(!showRating)}
                />
                Show ratings on the employee’s card
              </div>

              <Multiselect
                options={designation}
                selectedValues={selectedDesignations}
                onSelect={handleSelect}
                displayValue="value"
              />

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
