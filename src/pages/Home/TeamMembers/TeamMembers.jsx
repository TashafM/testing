/*eslint-disable */
import React, { useEffect, useRef, useState } from "react";
import "./TeamMembers.scss";
import DataTable from "../../../components/DataTable/DataTable";
import Description from "../Description/Description";
import users from "../../../assets/images/users.svg";
import DeleteButton from "../../../components/DeleteButton/DeleteButton";
import SearchBar from "../../../components/SearchBar/SearchBar";
import FilterBtn from "./FilterBtn/FilterBtn";
import axios from "axios";
import RatingBtn from "../../../components/RatingBtn/RatingBtn";
import RestoreBtn from "../../../components/RestoreBtn/RestoreBtn";
import Tabs from "./Tabs/Tabs";
import { colCurrentMembers, colPastMembers, teamMembersTab } from "./data/data";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import UnderLineTabs from "../../../components/Tabs/UnderLineTabs";
import CurrentMembers from "./CurrentMembers/CurrentMembers";
import RestoreDeleteBtn from "./RestoreDeleteBtn/RestoreDeleteBtn";
import PastMembers from "./PastMembers/PastMembers";

const TeamMembers = () => {
  const location = useLocation();

  const [currMemberData, setCurrMemberData] = useState([]);
  const [pastMemberData, setPastMemberData] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const currMemberApi = `https://63ebc23432a08117239190d4.mockapi.io/elred`;
  const pastMemberApi = "https://63ecd449be929df00cb3017e.mockapi.io/pastUser";

  const currentMember = "/home/team-members/current-members";
  const pastMember = "/home/team-members/past-members";
  // Try
  const [searchTerm, setSearchTerm] = useState("");
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);

    const filteredItems = items.filter((item) =>
      Object.values(item)
        .join(" ")
        .toLowerCase()
        .includes(event.target.value.toLowerCase())
    );
    setFilteredItems(filteredItems);
  };
  // Try

  const getCurrMembers = () => {
    setIsLoading(true);
    axios.get(currMemberApi).then((response) => {
      setCurrMemberData(response.data);
      // {
      //   location.pathname == currentMember && setItems(response.data);
      //   setFilteredItems(response.data);
      // }
      setItems(response.data)
      setFilteredItems(response.data)
      setIsLoading(false);
    });
  };

  const getPastMembers = () => {
    axios.get(pastMemberApi).then((response) => {
      setPastMemberData(response.data);
      // {
      //   location.pathname == pastMember && setItems(response.data);
      //   setFilteredItems(response.data);
      // }

    });
  };

  useEffect(() => {
    setSelectedIds([]);
    getCurrMembers();
    getPastMembers();
  }, [location]);

  return (
    <>
      <div className="upper-content">
        <Description
          icon={users}
          title="Team Members"
          count={currMemberData.length}
          api={
            location.pathname == currentMember ? currMemberApi : pastMemberApi
          }
          getDataFunc={
            location.pathname == currentMember ? getCurrMembers : getPastMembers
          }
          addMember="addMember"
        />
        <div className="members-tab">
          <RestoreDeleteBtn
            selectedIds={selectedIds}
            pastMemberData={pastMemberData}
            pastMemberApi={pastMemberApi}
            currMemberApi={currMemberApi}
            getCurrMembers={getCurrMembers}
            getPastMembers={getPastMembers}
            setSelectedIds={setSelectedIds}
            currMemberData={currMemberData}
            handleSearch={handleSearch}
          />
        </div>
        <hr style={{ marginTop: "-2%" }} />
        <div>
          {location.pathname == currentMember && (
            <CurrentMembers
              selectedIds={selectedIds}
              setSelectedIds={setSelectedIds}
              currMemberData={currMemberData}
              currMemberApi={currMemberApi}
              pastMemberApi={pastMemberApi}
              getCurrMembers={getCurrMembers}
              getPastMembers={getPastMembers}
              filteredItems={filteredItems}
            />
          )}
          {location.pathname == pastMember && (
            <PastMembers
              selectedIds={selectedIds}
              setSelectedIds={setSelectedIds}
              pastMemberData={pastMemberData}
              pastMemberApi={pastMemberApi}
              currMemberApi={currMemberApi}
              getPastMembers={getPastMembers}
              getCurrMembers={getCurrMembers}
              filteredItems={filteredItems}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default TeamMembers;
