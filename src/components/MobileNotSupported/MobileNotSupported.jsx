import React from "react";
import './MobileNotSupported.scss'
import mobile from '../../assets/images/mobile.svg'

const MobileNotSupported = () => {
  return (
    <div className="mobileDevice">
      <div className="title">Uh Oh!</div>
      <div className="sub-title">Mobile devices are currently not supported.</div>
      <div className="description">
        For better experience please use Desktop or tab devices. Once we develop
        our web app for mobile devices we will notify you{" "}
      </div>
      <div className="image-logo">
        <img src={mobile} alt="" />
      </div>
    </div>
  );
};

export default MobileNotSupported;
