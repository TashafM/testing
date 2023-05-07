import React, { useEffect, useState } from "react";
import "./otherinstructions.scss";
import { Button, Form, Offcanvas, Spinner } from "react-bootstrap";
import { axiosInstance } from "../../../../helper/axios";
import { API } from "../../../../helper/API";

const OtherInstructions = ({ show, handleClose }) => {
  const [labelInstruction, setLabelInstruction] = useState("");
  const [otherInstruction, setOtherInstruction] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (
      localStorage.getItem("labelInstruction") ||
      localStorage.getItem("otherInstruction")
    ) {
      setLabelInstruction(localStorage.getItem("labelInstruction"));
      setOtherInstruction(localStorage.getItem("otherInstruction"));
    }
  }, [localStorage.getItem("labelInstruction")]);

  const handleSubmit = (event) => {
    if (labelInstruction == "" && otherInstruction == "") {
      console.log("kuch nahi");
    } else {
      setLoading(true);
      event.preventDefault();
      // setLabelInstruction('');
      // setOtherInstruction('');

      const principalCompanyUserCode = localStorage.getItem(
        "principalCompanyUserCode"
      );
      axiosInstance
        .post(API.EDIT_OTHER_INSTRUCTIONS, {
          principalCompanyUserCode,
          labelInstruction,
          otherInstruction,
        })
        .then((res) => {
          console.log(res.result, "res.result");
          localStorage.setItem(
            "labelInstruction",
            res.result[0].labelInstruction
          );
          localStorage.setItem(
            "otherInstruction",
            res.result[0].otherInstruction
          );
          setLoading(false);
          handleClose();
        })
        .catch((error) => setLoading(false));
    }
    // you can do something with the data here, such as send it to a server
  };

  return (
    <div className="sidepanel">
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        className="instructions"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Other Instructions</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="instruction-div">
            <Form className="inst-form" onSubmit={handleSubmit}>
              <Form.Group controlId="labelInstruction">
                <Form.Label className="title-text">
                  Label Instruction
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={8}
                  placeholder="Write here..."
                  className="writing-space"
                  value={labelInstruction}
                  onChange={(event) => setLabelInstruction(event.target.value)}
                />
              </Form.Group>
              <Form.Group
                controlId="otherInstruction"
                className="otherInstructionsDiv"
              >
                <Form.Label className="title-text">
                  Other Instruction
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={8}
                  placeholder="Write here..."
                  className="writing-space"
                  value={otherInstruction}
                  onChange={(event) => setOtherInstruction(event.target.value)}
                />
              </Form.Group>
              <Button
                type="submit"
                className="save-btn some-margin"
                disabled={
                  loading ||
                  (labelInstruction === "" && otherInstruction === "")
                }
              >
                {loading ? (
                  <Spinner animation="border" variant="light" />
                ) : (
                  "Save"
                )}
              </Button>
              {/* <Button type="submit" className="save-btn some-margin" disabled={loading}>
                {loading ? (
                  <Spinner animation="border" variant="light" />
                ) : (
                  "Save"
                )}
              </Button> */}
            </Form>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default OtherInstructions;
