import React from "react";
import Arrow from "../../../../assets/images/arrow-right.png";
import "./styles.scss";

function DrawerHead({ title, handleClose, description }) {
  return (
    <div>
      <div className="d-flex align-items-center drawer-header-container">
        <img
          src={Arrow}
          alt="back-icon"
          className="image-go-back"
          onClick={handleClose}
        />
        <p className="drawer-title-text">{title}</p>
      </div>
      {description && <p className="drawer-description-text">{description}</p>}{" "}
    </div>
  );
}

export default DrawerHead;
