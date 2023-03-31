import React from "react";
import './topbar.scss'
import SearchBarDealers from "../../../../components/SearchBarDealers/SearchBarDealers";
import FilterBtn from "../../../../components/FilterButton/FilterButton";

const TopBar = ({title}) => {
  return (
    <div className="top-comp">
      <div className="title">{title}</div>
      <div className="search-filter-btn">
        <SearchBarDealers />
        <FilterBtn />
      </div>
    </div>
  );
};

export default TopBar;
