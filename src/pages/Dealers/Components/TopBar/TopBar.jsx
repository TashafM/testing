import React from "react";
import "./topbar.scss";
import SearchBarDealers from "../../../../components/SearchBarDealers/SearchBarDealers";
import FilterBtn from "../../../../components/FilterButton/FilterButton";
import backpage from "../../../../assets/images/backpage.svg";
import { useNavigate } from "react-router-dom";
import Filter from "../Filter/Filter";

const TopBar = ({ title, goback }) => {
  const navigate = useNavigate()
  const handleBack = () => {
    navigate(-1)
  }
  return (
    <div className="top-comp">
      <div className="title">
        <span >{goback ? <img src={backpage} onClick={handleBack} className="back-btn"/> : ""}</span>
        {title}
      </div>
      <div className="search-filter-btn">
        <SearchBarDealers />
        <Filter/>
      </div>
    </div>
  );
};

export default TopBar;
