import React from "react";
import { Col } from "react-bootstrap";
import links from "../../../../assets/images/links.png";
import BtnTitleIcon from "../../../../components/Button/BtnTitleIcon";
import { socialMedia } from "../../data/data";
import CardHead from "./CardHead";

function CardSocial({ socialMediaDetails, onClick }) {
  if (!socialMediaDetails.length) {
    return (
      <Col className="card-wrapper" md={6} xl={4}>
        <div className="card-cont default-height d-flex align-items-center justify-content-center">
          <BtnTitleIcon title="Add social links" onClick={onClick} />
        </div>
      </Col>
    );
  }
  return (
    <Col className="card-wrapper" md={6} xl={4}>
      <div className="card-cont">
        <CardHead onClick={onClick} title="Social Media & Links" icon={links} />

        <div className="d-flex justify-content-around flex-wrap mt-3">
          {socialMediaDetails.map((item, index) => {
            if (index < 4) {
              return (
                <div
                  className="d-flex flex-column align-items-center justify-content-center"
                  key={`${item.type}-index-${index}`}
                >
                  <img
                    className="icon-social"
                    src={socialMedia[item.type]}
                    alt={`${item.title} icon`}
                  />
                  <p className="title-social">{item.type}</p>
                </div>
              );
            }
          })}
        </div>
      </div>
    </Col>
  );
}

export default CardSocial;
