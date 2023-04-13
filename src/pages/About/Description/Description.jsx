import React from "react";
import circularLogo from "../../../assets/images/circular-logo.svg";
import verified from "../../../assets/images/verified.png";
import edit from "../../../assets/images/edit-icon.png";
import "./Description.scss";
import BtnIconOnly from "../../../components/Button/BtnIconOnly";
import { useContextProvider } from "../../../context";

function Description() {
  const { setOpenDrawer } = useContextProvider();
  return (
    <div className="description-wrapper">
      <p className="title">About Us</p>
      <div className=" row-cont align-items-center">
        <img className="comp-logo" src={circularLogo} alt="company logo" />
        <div className="title-cont">
          <p className="comp-title mb-0">A.T Inks</p>
          <p className="comp-subtitle  mb-0">Digital Inks</p>
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
      {/* <div className="discription-cont">
        <p className="comp-discription mb-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud.
        </p>
        <BtnIconOnly
          icon={edit}
          onClick={() => {
            setOpenDrawer({ open: true, type: "Edit", title: "Edit" });
          }}
        />
      </div> */}
    </div>
  );
}

export default Description;
