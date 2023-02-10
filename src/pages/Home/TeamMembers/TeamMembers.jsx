/*eslint-disable */
import React, { useEffect, useState } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import "./TeamMembers.scss";
import { HiBadgeCheck } from "react-icons/hi";
import { BsFillPencilFill } from "react-icons/bs";
import DataTable from "../../../components/DataTable/DataTable";
import Description from "../Description/Description";
import users from "../../../assets/images/users.svg";
import filter from "../../../assets/images/filter.svg";
import downArrow from "../../../assets/images/downArrow.svg";
import previous from "../../../assets/images/previous.svg";
import next from "../../../assets/images/next.svg";

import * as BS from "react-icons/bs";

// import TabItems from "../TabItems/TabItems";

const TeamMembers = () => {
  const [c, setC] = useState("...");
  const [d, setD] = useState("...");
  const [data, setData] = useState(null);
  const [data2, setData2] = useState(null);
  const [loading, setLoading] = useState(true);

  const column = [
    // {title: 'Index no.' , value:'id'},
    { title: "", value: "boxes" },
    { title: "First Name", value: "firstName" },
    { title: "Gender", value: "gender" },
    { title: "Password", value: "password" },
    { title: "University", value: "university" },
    { title: "Domain", value: "domain" },
    { title: "Mac Address", value: "macAddress" },
    { title: "University", value: "university" },
    { title: "Domain", value: "domain" },
    { title: "Mac Address", value: "macAddress" },
  ];

  const oldMember = [
    { title: "", value: "boxes" },
    { title: "Name", value: "name" },
    { title: "Contact", value: "phone" },
    { title: "Username", value: "username" },
    { title: "Website", value: "website" },
  ];
  const [selectedTab, setSelectedTab] = useState(1);

  const myapi = async () => {
    const api = "https://dummyjson.com/users";
    const data = await fetch(api);
    const res = await data.json();
    setData(res.users);
    setC(res.users.length);
    setLoading(false);
  };

  const selectTab = (val) => {
    setSelectedTab(val);
    if (val == 2) {
      setLoading(true);
      tryApi();
    } else {
      setLoading(true);
      myapi();
    }
  };

  const tryApi = async () => {
    const api = "https://jsonplaceholder.typicode.com/users";
    // const api = "https://dummyjson.com/users";
    const data = await fetch(api);
    const res = await data.json();
    setData2(res);
    setD(res.length);
    setLoading(false);
  };

  useEffect(() => {
    myapi();
  }, []);

  return (
    <>
      <div className="upper-content">
        <Description
          icon={users}
          title="Team Members"
          count={selectedTab == 1 ? c : d}
        />
        <div className="members-tab">
          <div className="col tabs-change">
            <div className="tab1" onClick={() => selectTab(1)}>
              Current Team Members
              <div className={`${selectedTab == 1 ? "indicator" : ""}`}></div>
            </div>
            <div className="tab2" onClick={() => selectTab(2)}>
              Past Team Members
              <div className={`${selectedTab == 2 ? "indicator" : ""}`}></div>
            </div>
          </div>
          <div className="col search-filter">
            <div className="search-div">
              <span className="icon-search">
                <BS.BsSearch />
              </span>
              <input type="text" placeholder="Search..."></input>
            </div>
            <div className="filter-btn">
              <span>
                <img src={filter} alt="" />
              </span>
              <span className="filter-text">Filter</span>
              <span>
                <img src={downArrow} alt="" />
              </span>
            </div>
          </div>
        </div>
        {selectedTab == 1 ? (
          <DataTable data={data} columns={column} />
        ) : (
          <DataTable data={data2} columns={oldMember} />
        )}

        <div className="scroll-buttons">
          <span>
            <img src={previous} alt="" />
          </span>
          <span>
            <img src={next} alt="" />
          </span>
        </div>
      </div>
    </>
  );
};

export default TeamMembers;
