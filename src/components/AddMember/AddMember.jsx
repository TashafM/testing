/*eslint-disable */

import React, { useEffect, useState, useContext } from "react";
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
import PhoneNumber from "../Input/PhoneNumber";
import { GlobalContext } from "../../App";
import { useLocation, useNavigate } from "react-router";
import AddMemberDate from "../AddMemberDate/AddMemberDate";

const AddMember = ({ api, getDataFunc, getCurrMembers, data, setData }) => {
  const { loading, setLoading, setMsg, msg } = useContext(GlobalContext);
  const [show, setShow] = useState(false);
  const [selectedDate, setSelectedDate] = useState(["", "", ""]);
  const [proDate, setproDate] = useState(["", "", ""]);
  // const [loading, setLoading] = useState(false);
  const [showRatings, setshowRatings] = useState(false);
  const [designationList, setDesignationList] = useState([]);
  const [designation, setDesignation] = useState([]);
  const [departmentList, setDepartmentList] = useState([]);
  const [department, setDepartment] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();
  //------------location-------------------------
  const [displayLocation, setDisplayLocation] = useState({
    city: "",
    state: "",
    country: "",
    latitude: "",
    longitude: "",
  });

  const handleChangeLocation = (event) => {
    setDisplayLocation({
      ...displayLocation,
      [event.target.name]: event.target.value,
    });
  };
  //---------------------------------------

  const getDesignations = () => {
    const accessToken = localStorage.getItem("accessToken");
    axios
      .get("https://dev.elred.io/getDesignations", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => setDesignationList(res.data.result));
    // .then((res) => console.log(res.data.result, "qwertyu"));
  };

  const getDepartment = () => {
    const accessToken = localStorage.getItem("accessToken");
    axios
      .get("https://dev.elred.io/getDepartments", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => setDepartmentList(res.data.result));
    // .then((res) => console.log(res.data.result, "qwertyu"));
  };

  useEffect(() => {
    getDesignations();
    getDepartment();
  }, [show]);

  const handleSelect = (selectedList, selectedItem) => {
    setDesignation(selectedList);
  };

  const depSelect = (selectedList, selectedItem) => {
    setDepartment(selectedList);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formValues, setFormValues] = useState([]);
  const myUtil = new Util();

  //----------------------
  const probDate = (index, value) => {
    setproDate((prevValues) => {
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

  /* VALIDATION AND FUNCTION FOR DATE */
  const validate = (value, min, max) =>
    parseInt(value, 10) >= min && parseInt(value, 10) <= max;

  const handleBlur = ({ target: { value } }) => {
    const newValue = value.padStart(2, "0");
    if (validate(newValue, min, max)) {
      onBlur(newValue);
    } else {
      onBlur("");
    }
  };

  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // const [selectedDate, setSelectedDate] = useState(["", "", ""]);
  // const [newDate, setNewDate] = useState(["","",""])

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleProbDate = (date) => {
    setproDate(date);
  };
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  /*--------------------------------------------- */
  const rawStartDate = selectedDate.join("/");
  // const [day, month, year] = rawStartDate.split('/');
  // const startDate = `${day.padStart(2, '0')}/${month.padStart(2, '0')}/${year}`;

  const rawEndDate = proDate.join("/");

  const startDate = formatDate(rawStartDate);
  const probationDate = formatDate(rawEndDate);

  function formatDate(dateStr) {
    const [day, month, year] = dateStr.split("/");
    const formattedDateStr = `${day.padStart(2, "0")}/${month.padStart(
      2,
      "0"
    )}/${year}`;
    return formattedDateStr;
  }

  const [phone, setPhone] = useState("");
  const [displayPhone, setDisplayPhone] = useState("");

  const handlePhoneInputChange = (e) => {
    const regex = /^[0-9+\-()]*$/; // Regex pattern to match allowed characters
    const input = e.target.value; // Get input value
    if (regex.test(input)) {
      // Validate input against regex
      if (e.target.name === "phone") {
        setPhone(input); // Set input as phone state
      } else if (e.target.name === "displayPhone") {
        setDisplayPhone(input); // Set input as displayPhone state
      }
    }
  };

  function handleSubmit(event) {
    setLoading(true);
    setMsg("Adding a team member...");
    event.preventDefault();
    const companyUserCode = localStorage.getItem("usercode");
    const accessToken = localStorage.getItem("accessToken");
    const newData = {
      ...formValues,
      phone: phone,
      displayPhone: displayPhone,
      showRatings: showRatings.toString(),
      startDate,
      probationDate,
      designation,
      department,
      companyUserCode,
      displayLocation,
    };
    axios
      .post(
        "https://dev.elred.io/portalAddCompanyTeamMember",
        // API.VIEW_CURRENT_TEAM_MEMBERS + `start=${page}&offset=10`,
        newData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((res) => {
        setData((prevData) => [newData, ...prevData]); // add updated data to state
        setLoading(false);
        if (location.pathname !== `/home/team-members/current-members`) {
          navigate(`/home/team-members/current-members`);
        }
      })
      .catch((err) => {
        console.log(err, "error");
        setLoading(false);
      });
    handleClose();
    setSelectedDate(["", "", ""]);
    setproDate(["", "", ""]);
    setshowRatings(false);
    setDepartment([]);
    setDesignation([]);
    setPhone(""), setDisplayPhone("");
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
                  name="displayFirstName"
                  // onChange={handleInputChange}
                  onChange={() => Util.handleChange(event, setFormValues)}
                  required
                />
              </FormGroup>
              <FormGroup className="input-div">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="displayLastName"
                  onChange={() => Util.handleChange(event, setFormValues)}
                />
              </FormGroup>
              <FormGroup className="input-div">
                <Form.Label>Personal Email ID *</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
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
                  onChange={handlePhoneInputChange}
                  value={phone}
                  required
                />
              </FormGroup>

              <FormGroup className="input-div">
                <Form.Label>Display Phone No *</Form.Label>
                <Form.Control
                  type="text"
                  name="displayPhone"
                  onChange={handlePhoneInputChange}
                  value={displayPhone}
                  required
                />
              </FormGroup>

              <div className="info-text">
                This phone number will reflect on your employee’s card.{" "}
              </div>

              <Form.Label className="dd-dropdown">Designation *</Form.Label>
              <Multiselect
                options={designationList}
                selectedValues={designation}
                onSelect={handleSelect}
                displayValue="value"
                className="multiselect-input"
              />
              <Form.Label className="dd-dropdown">Department *</Form.Label>
              <Multiselect
                options={departmentList}
                selectedValues={department}
                onSelect={depSelect}
                displayValue="value"
                className="multiselect-input"
              />

              <FormGroup className="input-div">
                <Form.Label>Employee Code *</Form.Label>
                <Form.Control
                  type="text"
                  name="employeeCode"
                  onChange={() => Util.handleChange(event, setFormValues)}
                  required
                />
              </FormGroup>

              <div>Location</div>
              <FormGroup className="input-div">
                <Form.Label>City *</Form.Label>
                <Form.Control
                  type="text"
                  name="city"
                  onChange={handleChangeLocation}
                  value={displayLocation.city}
                  required
                />
              </FormGroup>
              <FormGroup className="input-div">
                <Form.Label>State *</Form.Label>
                <Form.Control
                  type="text"
                  name="state"
                  onChange={handleChangeLocation}
                  value={displayLocation.state}
                  required
                />
              </FormGroup>
              <FormGroup className="input-div">
                <Form.Label>Country *</Form.Label>
                <Form.Control
                  type="text"
                  name="country"
                  onChange={handleChangeLocation}
                  value={displayLocation.country}
                  required
                />
              </FormGroup>
              <FormGroup className="input-div">
                <Form.Label>Latitude *</Form.Label>
                <Form.Control
                  type="text"
                  name="latitude"
                  onChange={handleChangeLocation}
                  value={displayLocation.latitude}
                  required
                />
              </FormGroup>
              <FormGroup className="input-div">
                <Form.Label>Longitude *</Form.Label>
                <Form.Control
                  type="text"
                  name="longitude"
                  onChange={handleChangeLocation}
                  value={displayLocation.longitude}
                  required
                />
              </FormGroup>

              <div className="d-flex justify-content-between">
                <DatePickerComp
                  heading={"Start Date *"}
                  selectedDate={selectedDate}
                  handleDateChange={handleDateChange}
                />
                <DatePickerComp
                  heading={"Probation Date *"}
                  selectedDate={probDate}
                  handleDateChange={handleProbDate}
                />
              </div>

              {/* <AddMemberDate /> */}
              {/* <AddMemberDate selectedDate={selectedDate} handleDateChange={handleDateChange} />
              <AddMemberDate selectedDate={newDate} handleDateChange={handleNewDateChange} /> */}



              <div>
                <input
                  type="checkbox"
                  checked={showRatings}
                  onChange={() => setshowRatings(!showRatings)}
                />
                <span className="show-ratings-title">
                  Show ratings on the employee’s card
                </span>
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

//
