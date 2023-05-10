import React from "react";
import filter from "../../../../assets/images/filter.svg";
import downArrow from "../../../../assets/images/downArrow.svg";

import "./Filter.scss";
import Tippy from "@tippyjs/react";

const Filter = ({ onClick = () => {} }) => {
  return (
    <>
      <Tippy content="Feature Coming Soon" trigger="click">
        <div className="filter-dealer" onClick={onClick}>
          <span className="left-icon">
            <img src={filter} alt="" />
          </span>
          <span className="filter-text">Filter</span>
          <span className="right-icon">
            <img src={downArrow} alt="" />
          </span>
        </div>
      </Tippy>
    </>
  );
};

export default Filter;
