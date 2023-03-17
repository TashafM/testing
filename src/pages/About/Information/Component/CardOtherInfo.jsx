import React from "react";
import { Col } from "react-bootstrap";
import Badges from "../../../../components/Input/Badges";
import CardHead from "./CardHead";
import quote from "../../../../assets/images/quote.png";

function CardOtherInfo() {
  return (
    <Col className="card-wrapper" md={6} xl={4}>
      <div className="card-cont">
        <CardHead title="Other Info" icon={quote} changemargin={"csschange"} />
        <div className="row mb-2">
          <div className="col-md-6 col-sm-12 title-other-Info">
            Our Sales reach is atx
          </div>
          <div className="col-md-6 col-sm-12 title-other-Info d-flex">
            {["India", "Goa"].map((item) => {
              return <Badges value={item} />;
            })}
          </div>
        </div>
        <div className="row ">
          <div className="col-md-6 col-sm-12 title-other-Info ">
            Our Services & support?
          </div>
          <div className="col-md-6 col-sm-12 title-other-Info">
            Ink Change over, Color profiling and Other Ink related issues
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-6 col-sm-12 title-other-Info">
            We are interested to purchase
          </div>
          <div className="col-md-6 col-sm-12 title-other-Info d-flex">
            {["Printing", "Pages"].map((item) => {
              return <Badges value={item} />;
            })}
          </div>
        </div>
      </div>
    </Col>
  );
}

export default CardOtherInfo;
