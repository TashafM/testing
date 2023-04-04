import React from "react";
import "./arrowlink.scss";
import nextArrow from "../../../../assets/images/nextArrow.svg";


const ArrowLink = ({title}) => {
  return (
    <div className="see-div">
      <span className="see-all">{title}</span>
      <img src={nextArrow} alt="" />
    </div>
  );
};

export default ArrowLink;
