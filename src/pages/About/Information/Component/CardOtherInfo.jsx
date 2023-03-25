import React from "react";
import { Col } from "react-bootstrap";
import Badges from "../../../../components/Input/Badges";
import CardHead from "./CardHead";
import quote from "../../../../assets/images/quote.png";

function CardOtherInfo({ otherInfo, onClick }) {
  return (
    <Col className="card-wrapper" md={6} xl={4}>
      <div className="card-cont">
        <CardHead
          title="Other Info"
          onClick={onClick}
          icon={quote}
          changemargin={"csschange"}
        />
        <div className="row mb-2">
          <div className="col-6 title-other-Info">Our Sales reach is at</div>
          <div className="col-6 title-other-Info d-flex">
            {otherInfo?.salesReachAt &&
              otherInfo?.salesReachAt.map((item) => {
                return <Badges value={item.city} />;
              })}
          </div>
        </div>
        <div className="row ">
          <div className="col-6 title-other-Info ">Our Services & support?</div>
          <div className="col-6 title-other-Info">{otherInfo?.details}</div>
        </div>
        <div className="row mb-2">
          <div className="col-6 title-other-Info">
            We are interested to purchase
          </div>
          <div className="col-6 title-other-Info d-flex">
            {otherInfo?.interestedToPurchase &&
              otherInfo?.interestedToPurchase.map((item) => {
                return <Badges key={item._id} value={item.value} />;
              })}
          </div>
        </div>
      </div>
    </Col>
  );
}

export default CardOtherInfo;
