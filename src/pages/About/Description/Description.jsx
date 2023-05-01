import React from "react";
import circularLogo from "../../../assets/images/circular-logo.svg";
import verified from "../../../assets/images/verified.png";
import "./Description.scss";
import compIcon from "../../../assets/images/company-default-icon.png";

function Description({ userData }) {
  return (
    <div className="description-wrapper">
      <p className="title">About Us</p>
      <div className=" row-cont align-items-center">
        <img
          className="comp-logo"
          src={userData?.dpURL ? userData?.dpURL : compIcon}
          alt="company logo"
        />
        <div className="title-cont">
          <p className="comp-title mb-0">
            {userData?.firstname} {userData?.lastname}
          </p>
          <p className="comp-subtitle  mb-0">{userData?.userName}</p>
        </div>
        <img
          className="verified-icon"
          src={verified}
          alt="verified icon"
          style={{ marginTop: "-27px" }}
        />
        <a className="verify-company" href="#">
          Verify Company
        </a>
      </div>
    </div>
  );
}

export default Description;
