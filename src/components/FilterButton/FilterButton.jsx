import React from "react";
import filter from "../../assets/images/filter.svg";
import downArrow from "../../assets/images/downArrow.svg";
import "./FilterButton.scss";

const FilterBtn = ({ onClick = () => {} }) => {
  return (
    <>
      <div className="filter-btn" onClick={onClick}>
        <span className="left-icon">
          <img src={filter} alt="" />
        </span>
        <span className="filter-text">Filter</span>
        <span className="right-icon">
          <img src={downArrow} alt="" />
        </span>
      </div>
    </>
  );
};

export default FilterBtn;
