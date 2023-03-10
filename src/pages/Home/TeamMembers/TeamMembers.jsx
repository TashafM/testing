/*eslint-disable */
import React, { useEffect, useRef, useState } from "react";
import "./TeamMembers.scss";
import Description from "../Description/Description";
import users from "../../../assets/images/users.svg";
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
  const currMemberApi = `https://63f368a0864fb1d60015fd5e.mockapi.io/new`;
  const pastMemberApi = "https://63ecd449be929df00cb3017e.mockapi.io/pastmembers";

  const currentMember = "/home/team-members/current-members";
  const pastMember = "/home/team-members/past-members";
  // Try
  const [searchTerm, setSearchTerm] = useState("");
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  const [searchTerm2, setSearchTerm2] = useState("");
  const [items2, setItems2] = useState([]);
  const [filteredItems2, setFilteredItems2] = useState([]);

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

  const handleSearch2 = (event) => {
    setSearchTerm2(event.target.value);

    const filteredItems2 = items2.filter((item) =>
      Object.values(item)
        .join(" ")
        .toLowerCase()
        .includes(event.target.value.toLowerCase())
    );
    setFilteredItems2(filteredItems2);
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
      setItems2(response.data)
      setFilteredItems2(response.data)
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
            handleSearch2={handleSearch2}
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
              filteredItems2={filteredItems2}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default TeamMembers;
