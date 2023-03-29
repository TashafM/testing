import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./Collapsible.scss";

function Collapsible({ title, description, eventKey, defaultActiveKey = "0" }) {
  return (
    <div className="collapsible-container">
      <Accordion defaultActiveKey={defaultActiveKey}>
        <Accordion.Item className="collapse-container" eventKey={eventKey}>
          <Accordion.Header className="collapse-title mb-2">
            {title}
          </Accordion.Header>
          <Accordion.Body className="collapse-desc pb-4">
            {description}
          </Accordion.Body>
        </Accordion.Item>
        <hr style={{ color: "#e4e4e4" }} />
      </Accordion>
    </div>
  );
}

export default Collapsible;
