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
import deleteBtn from "../../../assets/images/delete.svg";

import * as BS from "react-icons/bs";
import MembersTab from "../../../components/MembersTab/MembersTab";
import DeleteButton from "../../../components/DeleteButton/DeleteButton";
import SearchBar from "../../../components/SearchBar/SearchBar";
import FilterBtn from "./FilterBtn/FilterBtn";
import ScrollBtn from "../../../components/ScrollBtn/ScrollBtn";
import axios from "axios";
import AddMember from "../../../components/AddMember/AddMember";

// import TabItems from "../TabItems/TabItems";

const TeamMembers = () => {
  const [loading, setLoading] = useState(true);
  const [currMemberData, setCurrMemberData] = useState([]);
  const [pastMemberData, setPastMemberData] = useState(null);
  const [selectedIds, setSelectedIds] = useState([]);

  const currMemberApi = `https://63ebc23432a08117239190d4.mockapi.io/elred`;
  //   const currUserApi =
  //     "https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001";
  const pastUserApi = "https://jsonplaceholder.typicode.com/users";

  const getCurrMembers = () => {
    setLoading(true);
    axios.get(currMemberApi).then((response) => {
      setCurrMemberData(response.data);
      console.log(response.data);
    });
    setLoading(false);
  };

  useEffect(() => {
    getCurrMembers();
    // pastMembers();
  }, []);

  const colPastUsers = [{ title: "First Name", value: "name" }];
  const colCurrentMembers = [
    { title: "First Name", value: "name" },
    { title: "Email", value: "email" },
    { title: "Website", value: "website" },
  ];

  const [selectedTab, setSelectedTab] = useState(1);

  const selectTab = (val) => {
    setSelectedTab(val);
    if (val == 2) {
      setLoading(true);
    } else {
      setLoading(true);
    }
  };

  const handleCheckboxChange = (id) => {
    let newSelectedIds = [...selectedIds];
    if (newSelectedIds.includes(id)) {
      newSelectedIds = newSelectedIds.filter((i) => i !== id);
    } else {
      newSelectedIds.push(id);
    }
    setSelectedIds(newSelectedIds);
  };

  async function deleteSelectedItems() {
    const confirm = window.confirm(
      `Are you sure you want to delete ${selectedIds.length} users?`
    );
    if (confirm) {
      try {
        await Promise.all(
          selectedIds.map((itemId) => {
            return axios.delete(`${currMemberApi}/${itemId}`);
          })
        );
        setSelectedIds([]);
        getCurrMembers();
        console.log(selectedIds, "successs");
        // ... handle success
      } catch (error) {
        // ... handle error
        console.log(error, "erorrrrrrr");
      }
    }
  }

  return (
    <>
      <div className="upper-content">
        <Description
          icon={users}
          title="Team Members"
          count={10}
          // onUserAdded={handleUserAdded}
        />
        <div className="members-tab">
          <div className="col tabs-change">
            <div className="tab1" onClick={() => selectTab(1)}>
              Current Team Members
              <div className={`${selectedTab == 1 ? "indicator" : ""}`}></div>
            </div>
            <div className="tab2">
              Past Team Members
              <div className={`${selectedTab == 2 ? "indicator" : ""}`}></div>
            </div>
          </div>
          <div className="col search-filter">
            <DeleteButton
              selectedIds={selectedIds}
              deleteSelectedItems={deleteSelectedItems}
            />

            {/* <div className="search-div">
              <span className="icon-search">
                <BS.BsSearch />
              </span>
              <input type="text" placeholder="Search..."></input>
            </div> */}
            <SearchBar />
            <FilterBtn />
          </div>
        </div>

        {selectedTab == 1 ? (
          <DataTable
            columns={colCurrentMembers}
            data={currMemberData}
            setData={setCurrMemberData}
            api={currMemberApi}
            // del={handleDelete}
            // setPage={setPage}
            // page={page}
            handleCheckboxChange={handleCheckboxChange}
            getDataFunc={getCurrMembers}
            selectedIds={selectedIds}
            setSelectedIds={setSelectedIds}
            deleteSelectedItems={deleteSelectedItems}
          />
        ) : (
          <DataTable columns={oldMember} data={data2} />
        )}
        <ScrollBtn />
      </div>
    </>
  );
};

export default TeamMembers;
