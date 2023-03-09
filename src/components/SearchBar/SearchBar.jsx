import React from "react";
import "./SearchBar.scss";
import * as BS from "react-icons/bs";

const SearchBar = ({ handleSearch }) => {
  return (
    <>
      <div className="search-div">
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

export default SearchBar;
