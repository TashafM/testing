import React, { useEffect, useState } from "react";
import add from "../../assets/images/add.svg";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Offcanvas,
} from "react-bootstrap";
import axios from "axios";

const AddMember = ({ onUserAdded}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //   const header = {}

  const [firstName, setFirstName] = useState("");
  const [gender, setGender] = useState("");
  const [macAddress, setMacAddress] = useState("");
  const [email, setEmail] = useState("");
  const [domain, setDomain] = useState("");
  const [password, setPassword] = useState("");
  const [university, setUniversity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://63eb32bbfb6b6b7cf7d96fcd.mockapi.io/current_users", {
      firstName: firstName,
      gender: gender,
      macAddress: macAddress,
      email: email,
      domain: domain,
      password: password,
      university: university,
    }).then((res)=>{
      onUserAdded(res.data)
    })
    handleClose();
  };


  return (
    <>
      <div className="add-member" onClick={handleShow}>
        <span className="icon-desc">
          <img src={add} alt="" />
        </span>
        <span>Add Team Member</span>
      </div>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Off-Canvas Form</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Form.Label>Gender</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Last Name"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Form.Label>Mac Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Contact"
                value={macAddress}
                onChange={(e) => setMacAddress(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Form.Label>Domain</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Username"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Form.Label>University</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter University"
                value={university}
                onChange={(e) => setUniversity(e.target.value)}
              />
            </FormGroup>
            <Button variant="primary" type="submit">
              Save
            </Button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default AddMember;
