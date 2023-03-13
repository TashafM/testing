import React from "react";
import { Col, Row } from "react-bootstrap";
import "./TabletNavbar.scss";
import atinks from "../../assets/images/atinks.png";
import searchBg from "../../assets/images/searchBg.svg";
import cartBg from "../../assets/images/cartBg.svg";
import user from "../../assets/images/user.jpg";

const TabletNavbar = () => {
  return (
    <Row className="tabletNavbar">
      <Col className="company-logo">
        <img src={atinks} alt="" />
      </Col>
      <Col className="right-items">
        <div className="search-img">
          <img src={searchBg} alt="" />
        </div>
        <div className="cart-img">
          <img src={cartBg} alt="" />
        </div>
        <div className="user-img">
          <img src={user} alt="" />
        </div>
      </Col>
    </Row>
  );
};

export default TabletNavbar;
