import React from "react";
import "./dealerpopsearch.scss";
import * as BS from "react-icons/bs";
import Tippy from "@tippyjs/react";

const DealerPopSearch = ({ handleSearch }) => {
  return (
    <>
      <Tippy content="Feature Coming Soon" trigger="click">
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
      </Tippy>
    </>
  );
};

export default DealerPopSearch;
