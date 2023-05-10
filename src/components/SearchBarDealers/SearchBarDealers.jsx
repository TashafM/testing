import React from "react";
import "./searchbardealers.scss";
import * as BS from "react-icons/bs";
import Tippy from "@tippyjs/react";

const SearchBarDealers = ({ handleSearch }) => {
  return (
    <>
      {/* <div className="search-div-dealers">
        <span className="icon-search">
          <BS.BsSearch />
        </span>
        <input
          type="text"
          contentEditable={false}
          placeholder="Search..."
          onChange={handleSearch}
        ></input>
      </div> */}


      <Tippy content="Feature Coming Soon" trigger="click">
          {/* <button>My button</button> */}
          {/* <input type="text" placeholder="Search..." readOnly></input> */}
          <div className="search-div-dealers">
        <span className="icon-search">
          <BS.BsSearch />
        </span>
        <input
          type="text"
          contentEditable={false}
          placeholder="Search..."
          onChange={handleSearch}
          readOnly
        ></input>
      </div>
        </Tippy>
    </>
  );
};

export default SearchBarDealers;
