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
import { colCurrentMembers, colPastMembers } from "./data/data";

const TeamMembers = () => {
  const [currMemberData, setCurrMemberData] = useState([]);
  const [pastMemberData, setPastMemberData] = useState(null);
  const [selectedIds, setSelectedIds] = useState([]);
  const [selectedTab, setSelectedTab] = useState(1);
  const [ratingUser, setRatingUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const currMemberApi = `https://63ebc23432a08117239190d4.mockapi.io/elred`;
  const pastMemberApi = "https://63ecd449be929df00cb3017e.mockapi.io/pastUser";

  const getCurrMembers = () => {
    setIsLoading(true);
    axios.get(currMemberApi).then((response) => {
      setCurrMemberData(response.data);
      setIsLoading(false);
    });
  };

  const getPastMembers = () => {
    axios.get(pastMemberApi).then((response) => {
      setPastMemberData(response.data);
    });
  };

  useEffect(() => {
    getCurrMembers();
    getPastMembers();
  }, []);

  const setTab = (value) => {
    setSelectedTab(value);
    setSelectedIds([]);
  };

  return (
    <>
      <div className="upper-content">
        <Description
          icon={users}
          title="Team Members"
          count={currMemberData.length}
          api={selectedTab == 1 ? currMemberApi : pastMemberApi}
          getDataFunc={selectedTab == 1 ? getCurrMembers : getPastMembers}
          addMember="addMember"
        />
        <div className="members-tab">
          <Tabs setTab={setTab} selectedTab={selectedTab} />
          <div className="col search-filter">
            {selectedIds.length == 0 ? (
              ""
            ) : (
              <>
                {selectedTab == 2 ? (
                  <RestoreBtn
                    selectedIds={selectedIds}
                    data={pastMemberData}
                    apiTo={pastMemberApi}
                    apiFrom={currMemberApi}
                    func1={getCurrMembers}
                    func2={getPastMembers}
                    setSelectedIds={setSelectedIds}
                  />
                ) : (
                  <>
                    <DeleteButton
                      selectedIds={selectedIds}
                      data={currMemberData}
                      apiTo={currMemberApi}
                      apiFrom={pastMemberApi}
                      func1={getCurrMembers}
                      func2={getPastMembers}
                      setSelectedIds={setSelectedIds}
                    />
                  </>
                )}
              </>
            )}
            <SearchBar />
            <FilterBtn />
          </div>
        </div>
        <hr style={{marginTop:'-2%'}}/>

        {isLoading ? (
          "Loading..."
        ) : (
          <DataTable
            columns={selectedTab == 1 ? colCurrentMembers : colPastMembers}
            datum={selectedTab == 1 ? currMemberData : pastMemberData}
            selectedIds={selectedIds}
            api={selectedTab == 1 ? currMemberApi : pastMemberApi}
            api2={selectedTab == 1 ? pastMemberApi : currMemberApi}
            getDataFunc={selectedTab == 1 ? getCurrMembers : getPastMembers}
            getDataFunc2={selectedTab == 1 ? getPastMembers : getCurrMembers}
            delActive={selectedTab == 1 ? true : false}
            resActive={selectedTab != 1 ? true : false}
            ratings={selectedTab == 1 ? true : false}
            setSelectedIds={setSelectedIds}
            setRatingUser={setRatingUser}
            ratingUser={ratingUser}
            teamMembers={"teamMembers"}
          />
        )}
      </div>
    </>
  );
};

export default TeamMembers;
