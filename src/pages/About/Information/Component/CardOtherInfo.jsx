import React from "react";
import { Col } from "react-bootstrap";
import CardHead from "./CardHead";
import quote from "../../../../assets/images/other-info.png";
import BtnTitleCenter from "../../../../components/Button/BtnTitleCenter";

function CardOtherInfo({ otherInfo, onClick }) {
  console.log(
    otherInfo.salesReachAt.length ||
      otherInfo.interestedToPurchase.length ||
      otherInfo.servicesAndSupport.details !== ""
  );
  return (
    <Col className="card-wrapper" md={6} xl={4}>
      <div className="card-cont card-other-cont">
        <CardHead
          title="Other Info"
          onClick={onClick}
          icon={quote}
          changemargin={"csschange"}
        />
        {otherInfo?.salesReachAt?.length ||
        otherInfo?.interestedToPurchase?.length ||
        otherInfo?.servicesAndSupport?.details !== "" ? (
          <div>
            <div className="row ">
              <div className="col-12 email margin-text title-our-service">
                Our Services & support?
              </div>
              {otherInfo?.servicesAndSupport?.provided === "yes" ? (
                <div className="col-12 email service-and-support margin-text">
                  {otherInfo?.servicesAndSupport?.details}
                </div>
              ) : null}
            </div>

            <div className="d-flex justify-content-end btn-view-all-container">
              <BtnTitleCenter title="View all" onClick={onClick} />
            </div>
          </div>
        ) : (
          <p className="email empty-card-text">No info added yet.</p>
        )}
      </div>
    </Col>
  );
}

export default CardOtherInfo;
