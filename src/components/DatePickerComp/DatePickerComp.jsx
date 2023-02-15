import React from "react";
import { Form, FormGroup } from "react-bootstrap";
import ReactDatePicker from "react-datepicker";

const DatePickerComp = ({heading, selectedDate, setSelectedDate, required}) => {
  return (
    <FormGroup>
      <Form.Label>{heading}</Form.Label>
      <ReactDatePicker
        className="date"
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy"
        placeholderText="DD/MM/YYYY"
        required={required ? true : false}
      />
    </FormGroup>
  );
};

export default DatePickerComp;
