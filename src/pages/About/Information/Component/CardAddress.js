import React from "react";
import { Col } from "react-bootstrap";
import location from "../../../../assets/images/location.png";

import { prepareAddressString } from "../../../../components/Utils/Utils";
import CardHead from "./CardHead";

function CardAddress({ registeredAddress, onClick }) {
  return (
    <Col className="card-wrapper" md={6} xl={4}>
      <div className="card-cont">
        <CardHead
          title="Address"
          type={"Address"}
          icon={location}
          onClick={onClick}
        />
        {Object.keys(registeredAddress?.address ?? {}).length ? (
          <div className="address-container">
            <span className="email margin-text">
              {prepareAddressString(registeredAddress)}
            </span>
          </div>
        ) : (
          <p className="email empty-card-text"> No address added yet.</p>
        )}
      </div>
    </Col>
  );
}

export default CardAddress;
