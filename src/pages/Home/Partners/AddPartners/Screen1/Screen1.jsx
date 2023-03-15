import axios from "axios";
import React, { useState } from "react";
import { Button, Form, FormGroup, Offcanvas } from "react-bootstrap";
import InputField from "../../../../../components/InputField/InputField";
import RadioButton from "../../../../../components/RadioButton/RadioButton";
import "./Screen1.scss";
import add from '../../../../../assets/images/add.svg'
import Util from "../../../../../components/UtilityFunctions/UtilityFunctions";

const Screen1 = ({api, getDataFunc}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formData, setFormData] = useState({
    name: "",
    telephone1: "",
    telephone2: "",
    mobile: "",
    email: "",
    website: "",
    partnerType: "",
    pan: "",
    gstin: "",
    arn: "",
  });

  function handleInputChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevInputs) => ({
      ...prevInputs,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  const submitData = (e) => {
    e.preventDefault();
    axios
      .post(api, formData)
      .then((res) => {
        getDataFunc()
      });
      handleClose()
  };

  return (
    // <Form onSubmit={addPartnersFunc}>
    <>
      <div className="add-member" onClick={handleShow}>
        <span className="icon-desc">
          <img src={add} alt="" />
        </span>
        <span>Add A Partner</span>
      </div>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <div className="content-div">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <div className="title">Add A Partner</div>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Form onSubmit={submitData}>
              <div className="screen1-heading">About</div>
              <div className="sub-headings">Company Details</div>
              <InputField
                title="Name"
                type={"text"}
                name={"name"}
                value={formData.name}
                onChangeFunc={handleInputChange}
                required
              />
              <InputField
                title="Telephone No. 1"
                type={"number"}
                name={"telephone1"}
                value={formData.telephone1}
                onChangeFunc={handleInputChange}
              />
              <InputField
                title="Telephone No. 2"
                type={"number"}
                name={"telephone2"}
                value={formData.telephone2}
                onChangeFunc={handleInputChange}
              />
              <InputField
                title="Mobile No."
                type={"number"}
                name={"mobile"}
                value={formData.mobile}
                onChangeFunc={handleInputChange}
              />
              <InputField
                title="Email ID"
                type={"email"}
                name={"email"}
                value={formData.email}
                onChangeFunc={handleInputChange}
              />
              <InputField
                title="Website"
                type={"text"}
                name={"website"}
                value={formData.website}
                onChangeFunc={handleInputChange}
              />
              <RadioButton
                label={"Business partner type :"}
                name="partnerType"
                option1="Private"
                option2="Company"
                value={formData.partnerType}
                selectedOption={formData.partnerType}
                handleOptionChange={handleInputChange}
              />

              <hr className='horizontal-line'/>

              <div className="sub-headings">Tax Information</div>
              <InputField
                title="PAN No."
                type={"text"}
                name={"pan"}
                value={formData.pan}
                onChangeFunc={handleInputChange}
              />
              <InputField
                title="GSTIN"
                type={"text"}
                name={"gstin"}
                value={formData.gstin}
                onChangeFunc={handleInputChange}
              />
              <InputField
                title="ARN No."
                type={"text"}
                name={"arn"}
                value={formData.arn}
                onChangeFunc={handleInputChange}
              />
              <Button variant="primary" className="save-btn" type="submit">
                Save
              </Button>
            </Form>
          </Offcanvas.Body>
        </div>
      </Offcanvas>
    </>
  );
};

export default Screen1;
