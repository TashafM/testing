import React from "react";
import { Col, Row } from "react-bootstrap";
import progress from '../../../../assets/images/progress.png'
import announcements from '../../../../assets/images/announcements.png'
import './dealerdashboard.scss'


const DealerDashboard = () => {
  return (
    <div className="dashboard-container">
      <Row>
        <Col className="column announcement" style={{backgroundImage: `url(${announcements})`, backgroundSize: 'cover'}}>
          Announcements
        </Col>
        <Col className="column orders-col"></Col>
        <Col className="column third-col"></Col>
        <Col className="column fourth-col"></Col>
      </Row>
      <Row>
        <Col className="bottom-column">
          <div className="progress-banner">
            <div>
              <img src={progress} alt="" />
            </div>
            <div className="txt">Coming Soon </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default DealerDashboard;
