import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import progress from "../../../../assets/images/progress.png";
import announcements from "../../../../assets/images/announcements.png";
import "./dealerdashboard.scss";

const DealerDashboard = () => {
  return (
    <div className="dashboard-container">
      <Row>
        <Col className="col-xl-9">
          <Row>
            <Col
              className="column announcement"
              // style={{
              //   backgroundImage: `url(${announcements})`,
              //   backgroundSize: "cover",
              // }}
            >
              {/* Announcements */}
            Coming Soon
            </Col>
            <Col className="column orders-col">Coming Soon</Col>
            <Col className="column third-col">Coming Soon</Col>
            <Col className="column fourth-col">Coming Soon</Col>
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
        </Col>
        <Col className="col-xl-3 notification-sidebar">
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit, earum! */}
          Feature Coming Soon
        </Col>
      </Row>
    </div>
  );
};

export default DealerDashboard;
