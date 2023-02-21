import React from "react";
import { Form, FormGroup } from "react-bootstrap";
import './InputField.scss'

const InputField = ({title, name, type, onChangeFunc,required}) => {
  return (
    <FormGroup className="input-div-comp">
      <Form.Label>{title}</Form.Label>
      <Form.Control
        type={type}
        name={name}
        onChange={onChangeFunc}
        required={required ? required : ''}
      />
    </FormGroup>
  );
};

export default InputField;
