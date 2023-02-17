import React from "react";
import { Form, FormGroup } from "react-bootstrap";
import   ReactDatePicker  from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'

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
        // minDate={new Date()}
      />
     
    </FormGroup>
  );
};

export default DatePickerComp;
