import React from "react";
import { Button, Form, FormGroup } from "react-bootstrap";
import InputField from "../../../../components/InputField/InputField";
import Screen1 from "./Screen1/Screen1";

const AddPartners = ({api, getDataFunc}) => {
  const handleInputChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <>
      <Screen1 api={api} getDataFunc={getDataFunc}/>
    </>
  );
};

export default AddPartners;
