import React from "react";
import "./NeedHelp.scss";
import help from '../../assets/images/help.svg'

const NeedHelp = () => {
  return (
    <div className="needHelp">
      <div className="borderDiv">
        <div className="icon">
            <img src={help} />
        </div>
        <div className="title">Need Help</div>
        <div className="desc">Our support team is at your disposal.</div>
        <div className="helpBtn">Get Help</div>
      </div>
    </div>
  );
};

export default NeedHelp;
