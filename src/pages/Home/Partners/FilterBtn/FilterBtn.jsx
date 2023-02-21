import React from "react";
import filter from '../../../../assets/images/filter.svg'
import downArrow from '../../../../assets/images/downArrow.svg'


const FilterBtn = () => {
  return (
    <>
      <div className="filter-btn">
        <span>
          <img src={filter} alt="" />
        </span>
        <span className="filter-text">Filter</span>
        <span>
          <img src={downArrow} alt="" />
        </span>
      </div>
    </>
  );
};

export default FilterBtn;
