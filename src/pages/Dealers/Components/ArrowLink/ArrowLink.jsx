import React from "react";
import "./arrowlink.scss";
import nextArrow from "../../../../assets/images/nextArrow.svg";


const ArrowLink = ({title, onClick}) => {
  return (
    <div className="see-div" onClick={onClick}>
      <span className="see-all">{title}</span>
      <img src={nextArrow} alt="" />
    </div>
  );
};

export default ArrowLink;
