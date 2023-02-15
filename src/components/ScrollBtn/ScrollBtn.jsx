import React from "react";
import "./ScrollBtn.scss";
import previous from '../../assets/images/previous.svg'
import next from '../../assets/images/next.svg'


const ScrollBtn = () => {
  return (
    <>
      <div className="scroll-buttons">
        <span>
          <img src={previous} alt="" />
        </span>
        <span>
          <img src={next} alt="" />
        </span>
      </div>
    </>
  );
};

export default ScrollBtn;
