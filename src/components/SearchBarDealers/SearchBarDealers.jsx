import React from "react";
import "./searchbardealers.scss";
import * as BS from "react-icons/bs";

const SearchBarDealers = ({ handleSearch }) => {
  return (
    <>
      <div className="search-div-dealers">
        <span className="icon-search">
          <BS.BsSearch />
        </span>
        <input
          type="text"
          placeholder="Search..."
          onChange={handleSearch}
        ></input>
      </div>
    </>
  );
};

export default SearchBarDealers;
