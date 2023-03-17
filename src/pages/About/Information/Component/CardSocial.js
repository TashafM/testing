import React from "react";
import { Col } from "react-bootstrap";
import links from "../../../../assets/images/links.png";
import { socialMedia } from "../../data/data";
import CardHead from "./CardHead";

function CardSocial() {
  return (
    <Col className="card-wrapper" md={6} xl={4}>
      <div className="card-cont">
        <CardHead title="Social Media & Links" icon={links} />

        <div className="d-flex justify-content-around">
          {socialMedia.map((item) => {
            return (
              <div
                className="d-flex flex-column justify-content-center"
                key={item.title}
              >
                <img
                  className="icon-social"
                  src={item.icon}
                  alt={`${item.title} icon`}
                />
                <p className="title-social">{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Col>
  );
}

export default CardSocial;
