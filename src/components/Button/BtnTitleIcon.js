import React from "react";
import "./Button.scss";
import Add from "../../assets/images/add-default.png";

function BtnTitleIcon({ title, onClick = () => {}, type, smallbutton }) {
  return (
    <div className="d-flex" onClick={onClick}>
      <img src={Add} alt="default-add" />
      <button type={type} className={"btn-icon-title"}>
        {title}
      </button>
    </div>
  );
}

export default BtnTitleIcon;
