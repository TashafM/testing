import React from "react";
import { Col } from "react-bootstrap";
import location from "../../../../assets/images/location.png";
import BtnTitleIcon from "../../../../components/Button/BtnTitleIcon";
import { prepareAddressString } from "../../../../components/Utils/Utils";
import CardHead from "./CardHead";

function CardAddress({ registeredAddress, onClick }) {
  if (!Object.keys(registeredAddress.address).length) {
    return (
      <Col className="card-wrapper" md={6} xl={4}>
        <div className="card-cont default-height d-flex align-items-center justify-content-center">
          <BtnTitleIcon title="Add Address" onClick={onClick} />
        </div>
      </Col>
    );
  }

  console.log(prepareAddressString(registeredAddress));
  return (
    <Col className="card-wrapper" md={6} xl={4}>
      <div className="card-cont">
        <CardHead
          title="Address"
          type={"Address"}
          icon={location}
          onClick={onClick}
        />
        <div className="address-container">
          <span className="email margin-text">
            {prepareAddressString(registeredAddress)}
          </span>
        </div>
      </div>
    </Col>
  );
}

export default CardAddress;
