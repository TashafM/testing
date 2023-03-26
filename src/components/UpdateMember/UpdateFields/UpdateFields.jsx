import axios from "axios";
import Multiselect from "multiselect-react-dropdown";
import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup } from "react-bootstrap";
import DatePickerComp from "../../DatePickerComp/DatePickerComp";
import Util from "../../UtilityFunctions/UtilityFunctions";

const UpdateFields = ({ editData, handleClose }) => {
  const [editValue, setEditValue] = useState(editData);
  const [designationList, setDesignationList] = useState([]);
  const [departmentList, setDepartmentList] = useState([]);

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

  function handleSelect(selectedList) {
    setEditValue((prevState) => ({
      ...prevState,
      designation: selectedList,
    }));
  }

  function depSelect(selectedList) {
    setEditValue((prevState) => ({
      ...prevState,
      department: selectedList,
    }));
  }

  function handleChangeLocation(event) {
    const { name, value } = event.target;
    setEditValue((prevState) => ({
      ...prevState,
      displayLocation: {
        ...prevState.displayLocation,
        [name]: value,
      },
    }));
  }

  //----------------------------------------------------
  function getDateParts(rawDate) {
    const parts = rawDate.split("/");
    return parts.map((part) => parseInt(part));
  }

  const dateParts = getDateParts(editValue.startDate);
  const probationDateParts = getDateParts(editValue.probationDate);
  const [date, setDate] = useState(dateParts);
  const [pdate, setPdate] = useState(probationDateParts);
  const [startDate, setStartDate] = useState(date);
  const [probationDate, setProbationDate] = useState(pdate);

  function formatDate(dateStr) {
    const [day, month, year] = dateStr.split("/");
    const formattedDateStr = `${day.padStart(2, "0")}/${month.padStart(
      2,
      "0"
    )}/${year}`;
    return formattedDateStr;
  }

  const dateInput = (index, value) => {
    const updatedDate = [...date];
    updatedDate[index] = value;
    setDate(updatedDate);
  };

  const dateInput2 = (index, value) => {
    const updatedDate = [...pdate];
    updatedDate[index] = value;
    setPdate(updatedDate);
  };

  const abc = date.join("/");
  const xyz = formatDate(abc);

  const rawP = pdate.join("/");
  const probation = formatDate(rawP);

  //   const dateInput = (index, value) => {
  //     const updatedDate = [...date];
  //     if (index === 0) {
  //       // Pad the month value with leading zeros if needed
  //       updatedDate[index] = value.toString().padStart(2, '0');
  //     } else if (index === 1) {
  //       // Pad the day value with leading zeros if needed
  //       updatedDate[index] = value.toString().padStart(2, '0');
  //     } else {
  //       updatedDate[index] = value;
  //     }
  //     setDate(updatedDate);
  //   };

  //----------------------------------------------------

  //------------------- updating date --------------------

  //=======================================================
  function handleInputChange(event) {
    const { name, value } = event.target;
    setEditValue((prevInputs) => ({ ...prevInputs, [name]: value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(editValue, "jjjjjjjjjj");
    // editValue.startDate = xyz;
    // setStartDate(editValue.startDate)

    // editValue.probationDate = probation;
    // setProbationDate(editValue.probationDate)

    // console.log(editValue,'tashaf')

    //-----------------------------------------
    const accessToken = localStorage.getItem("accessToken");

    const { email, phone, teamMemberUserCode, teamMemberStatus, ...abcd  } = editValue;
    axios
      .patch(
        "https://dev.elred.io/portalEditCompanyTeamMemberDetails",
        {
          ...abcd
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((res) =>
        handleClose()
      );
  };

  useEffect(() => {
    getDesignations();
    getDepartment();
  }, []);

  return (
    <Form onSubmit={handleSubmit}>
      {/* <FormGroup className="input-div">
                <Form.Label>First Name *</Form.Label>
                <Form.Control
                  value={formValues.firstName}
                  type="text"
                  name="firstName"
                  onChange={handleInputChange}
                  required
                />
              </FormGroup> */}
      <FormGroup className="input-div">
        <Form.Label>First Name *</Form.Label>
        <Form.Control
          value={editValue.displayFirstName}
          type="text"
          name="displayFirstName"
          onChange={handleInputChange}
          required
        />
      </FormGroup>
      <FormGroup className="input-div">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          value={editValue.displayLastName}
          type="text"
          name="displayLastName"
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup className="input-div">
        <Form.Label>Personal Email ID *</Form.Label>
        <Form.Control
          value={editValue.email}
          type="text"
          name="email"
          onChange={handleInputChange}
          required
        />
      </FormGroup>
      <FormGroup className="input-div">
        <Form.Label>Display Email ID *</Form.Label>
        <Form.Control
          value={editValue.displayEmail}
          type="email"
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
          value={editValue.phone}
          type="text"
          name="phone"
          onChange={handleInputChange}
          required
        />
      </FormGroup>
      <FormGroup className="input-div">
        <Form.Label>Display Phone No *</Form.Label>
        <Form.Control
          value={editValue.displayPhone}
          type="text"
          name="displayPhone"
          onChange={handleInputChange}
          required
        />
      </FormGroup>
      <div className="info-text">
        This phone number will reflect on your employee’s card.{" "}
      </div>

      <Form.Label>Designation *</Form.Label>
      <Multiselect
        options={designationList}
        selectedValues={editValue.designation}
        onSelect={handleSelect}
        displayValue="value"
      />
      <Form.Label>Department *</Form.Label>
      <Multiselect
        options={departmentList}
        selectedValues={editValue.department}
        onSelect={depSelect}
        displayValue="value"
      />

      <FormGroup className="input-div">
        <Form.Label>Employee Code *</Form.Label>
        <Form.Control
          value={editValue.employeeCode}
          type="text"
          name="employeeCode"
          onChange={handleInputChange}
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
          value={editValue.displayLocation.city}
          required
        />
      </FormGroup>
      <FormGroup className="input-div">
        <Form.Label>State *</Form.Label>
        <Form.Control
          type="text"
          name="state"
          onChange={handleChangeLocation}
          value={editValue.displayLocation.state}
          required
        />
      </FormGroup>
      <FormGroup className="input-div">
        <Form.Label>Country *</Form.Label>
        <Form.Control
          type="text"
          name="country"
          onChange={handleChangeLocation}
          value={editValue.displayLocation.country}
          required
        />
      </FormGroup>
      <FormGroup className="input-div">
        <Form.Label>Latitude *</Form.Label>
        <Form.Control
          type="text"
          name="latitude"
          onChange={handleChangeLocation}
          value={editValue.displayLocation.latitude}
          required
        />
      </FormGroup>
      <FormGroup className="input-div">
        <Form.Label>Longitude *</Form.Label>
        <Form.Control
          type="text"
          name="longitude"
          onChange={handleChangeLocation}
          value={editValue.displayLocation.longitude}
          required
        />
      </FormGroup>

      <div className="d-flex justify-content-between">
        <DatePickerComp
          heading={"Start Date *"}
          dateInput={dateInput}
          selectedDate={date}
        />
        {/* {console.log(date)} */}
        <DatePickerComp
          heading={"Probation Date *"}
          dateInput={dateInput2}
          selectedDate={pdate}
        />
      </div>

      {/* <div>
        <input
          type="checkbox"
          checked={showRatings}
          onChange={() => setshowRatings(!showRatings)}
        />
        Show ratings on the employee’s card
      </div> */}

      <Button variant="primary" type="submit" className="save-btn">
        Save
      </Button>
    </Form>
  );
};

export default UpdateFields;
