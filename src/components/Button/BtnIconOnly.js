import React from "react";
import "./Button.scss";
import edit from "../../assets/images/edit-icon.png";

function BtnIconOnly({ icon = edit, onClick = () => {} }) {
  return (
    <div className="icon-button">
      <button className="edit-icon" onClick={onClick}>
        <img src={icon} alt="iconed button" />
      </button>
    </div>
  );
}

export default BtnIconOnly;
