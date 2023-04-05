import React from "react";
import "./dealerpopsearch.scss";
import * as BS from "react-icons/bs";

const DealerPopSearch = ({ handleSearch }) => {
  return (
    <>
      <div className="dealer-search-div">
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

export default DealerPopSearch;
