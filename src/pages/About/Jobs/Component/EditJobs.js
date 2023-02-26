import React, { useState } from "react";
import location from "../../../../assets/images/location.png";
import business from "../../../../assets/images/business.png";
import setting from "../../../../assets/images/setting.svg";
import group from "../../../../assets/images/Group.png";
import BtnTitleCenter from "../../../../components/Button/BtnTitleCenter";
import { Modal, Row, Col, InputGroup, Form } from "react-bootstrap";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";
import EditorInput from "../../../../components/Input/EditorInput";

function EditJobs({ close }) {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  return (
    <div>
      <Row>
        <Col className="col-8">
          <div class="d-flex bd-highlight">
            <div class="p-2 flex-grow-0 bd-highlight">
              <img src={group} alt="image" className="iconproperties" />
            </div>
            <div class="p-2 flex-grow-1 bd-highlight">
              <InputGroup className="mb-3">
                <Form.Control
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  placeholder="Backend Lead"
                />
              </InputGroup>
            </div>
          </div>
        </Col>
        <Col className="col-1"></Col>
        <Col className="col-3">
          <div class="p-2 bd-highlight">
            <BtnTitleCenter smallbutton={true} type="submit" title={"Save"} />
          </div>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col className="col-9">
          <div class="d-flex bd-highlight">
            <div class="p-2  bd-highlight">
              <img src={business} alt="image" className="iconpropertieslogo" />
            </div>
            <div class="p-1  bd-highlight">
              <Form.Select>
                <option>Full Time</option>
              </Form.Select>
            </div>
            <div class="p-2  bd-highlight">Exp:</div>
            <div class="p-1  bd-highlight">
              <Form.Select>
                <option>5-6 year</option>
              </Form.Select>
            </div>
            <div class="p-2  bd-highlight">
              <img src={location} alt="image" className="iconpropertieslogo" />
            </div>
            <div class="p-1  bd-highlight">
              <Form.Select>
                <option>Mumbai</option>
              </Form.Select>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="col-8">
          <div class="d-flex bd-highlight">
            <div class="p-2  bd-highlight">
              <img src={setting} alt="image" className="iconpropertieslogo" />
            </div>
            <div class="p-2 flex-grow-1  bd-highlight">
              <InputGroup className="mb-3">
                <Form.Control
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  placeholder="Python, AWS, JavaScript
"
                />
              </InputGroup>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="row-cont-editor">
        <EditorInput
          editorState={editorState}
          onEditorStateChange={setEditorState}
        />
      </Row>
    </div>
  );
}

export default EditJobs;
