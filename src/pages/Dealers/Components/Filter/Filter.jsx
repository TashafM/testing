import React from "react";
import filter from "../../../../assets/images/filter.svg";
import downArrow from "../../../../assets/images/downArrow.svg";

import "./Filter.scss";

const Filter = ({ onClick = () => {} }) => {
  return (
    <>
      <div className="filter-dealer" onClick={onClick}>
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

export default Filter;
