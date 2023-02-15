import React from "react";
import './SearchBar.scss'
import * as BS from "react-icons/bs";
import filter from '../../assets/images/filter.svg';
import downArrow from '../../assets/images/downArrow.svg'

const SearchBar = () => {
  return (
    <>
      <div className="search-div">
        <span className="icon-search">
          <BS.BsSearch />
        </span>
        <input type="text" placeholder="Search..."></input>
      </div>
    </>
  );
};

export default SearchBar;
