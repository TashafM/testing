import React from "react";
import { Form, FormGroup, InputGroup } from "react-bootstrap";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DatePickerComp.scss";

const DatePickerComp = ({ heading, dateInput, selectedDate}) => {
  return (
    <div className="date-picker-comp">
      <Form.Label className="date-heading">{heading}</Form.Label>
      <InputGroup className="date-main">
        <Form.Control
          className="date-input day"
          type="text"
          placeholder="DD"
          maxLength={2}
          value={selectedDate[0]}
          onChange={(e) => dateInput(0, e.target.value)}
        
          // required
        />
        <Form.Control
          className="date-input"
          type="text"
          placeholder="MM"
          maxLength={2}
          value={selectedDate[1]}
          onChange={(e) => dateInput(1, e.target.value)}
          // required
   
        />
        <Form.Control
          type="text"
          placeholder="YYYY"
          maxLength={4}
          className="date-input year"

          value={selectedDate[2]}
          onChange={(e) => dateInput(2, e.target.value)}
          // required
        />
      </InputGroup>
    </div>
  );
};

export default DatePickerComp;
