import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./Collapsible.scss";

function Collapsible({ title, description, eventKey, defaultActiveKey = "0" }) {
  return (
    <div className="collapse-container">
      <Accordion defaultActiveKey={defaultActiveKey}>
        <Accordion.Item className="collapse-container" eventKey={eventKey}>
          <Accordion.Header className="collapse-title">
            {title}
          </Accordion.Header>
          <Accordion.Body className="collapse-desc">
            {description}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Collapsible;
