import React from "react";
import "./ScrollBtn.scss";
import previous from '../../assets/images/previous.svg'
import next from '../../assets/images/next.svg'


const ScrollBtn = ({myRef, setScrollX}) => {

  const handleScrollLeft = () => {
    const table = myRef.current;
    table.scrollLeft -= 100
    setScrollX(table.scrollLeft)
  }

  const handleScrollRight = () => {
    const table = myRef.current;
    table.scrollLeft += 100
    setScrollX(table.scrollLeft)
  }

  return (
    <>
      <div className="scroll-buttons">
        <span>
          <img src={previous} alt="" onClick={handleScrollLeft}/>
        </span>
        <span>
          <img src={next} alt="" onClick={handleScrollRight}/>
        </span>
      </div>
    </>
  );
};

export default ScrollBtn;
