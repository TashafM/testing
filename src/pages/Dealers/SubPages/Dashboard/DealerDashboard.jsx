import React from "react";
import { Col, Row } from "react-bootstrap";
import progress from '../../../../assets/images/progress.png'

const DealerDashboard = () => {
  return (
    <div className="dashboard-container">
      <Row>
        <Col className="column"></Col>
        <Col className="column"></Col>
        <Col className="column"></Col>
        <Col className="column"></Col>
      </Row>
      <Row>
        <Col className="bottom-column">
          <div className="progress-banner">
            <div>
              <img src={progress} alt="" />
            </div>
            <div className="txt">Work in progress...</div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default DealerDashboard;
