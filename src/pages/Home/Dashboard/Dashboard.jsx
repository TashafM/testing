import React from "react";
import { Col, Row } from "react-bootstrap";
import './Dashboard.scss';
import progress from '../../../assets/images/progress.png'
import { useLocation } from "react-router-dom";

const Dashboard = () => {

  const location = useLocation()
  return (
    <div className="dashboard-container">
      <Row>
        <Col className="column"></Col>
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
                <div className="txt">
                    Work in progress...
                </div>
            </div>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
