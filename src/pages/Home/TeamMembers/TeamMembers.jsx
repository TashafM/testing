/*eslint-disable */
import React, { useEffect, useRef, useState } from "react";
import "./TeamMembers.scss";
import Description from "../Description/Description";
import users from "../../../assets/images/users.svg";
// import axios from "axios";
import axios from "../../../helper/axios";
import RatingBtn from "../../../components/RatingBtn/RatingBtn";
import RestoreBtn from "../../../components/RestoreBtn/RestoreBtn";
import Tabs from "./Tabs/Tabs";
import { colCurrentMembers, colPastMembers, teamMembersTab } from "./data/data";
import { Outlet, useLocation, useMatch, useNavigate } from "react-router-dom";
import UnderLineTabs from "../../../components/Tabs/UnderLineTabs";
import CurrentMembers from "./CurrentMembers/CurrentMembers";
import RestoreDeleteBtn from "./RestoreDeleteBtn/RestoreDeleteBtn";
import PastMembers from "./PastMembers/PastMembers";
import { API } from "../../../helper/API";
import InfiniteScroll from "react-infinite-scroll-component";

const TeamMembers = () => {
  const location = useLocation();
  //-----------------
  // const [currentData, setCurrentData] = useState([]);
  //--------------
  const [currMemberData, setCurrMemberData] = useState([]);
  const [pastMemberData, setPastMemberData] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const currMemberApi = `https://63f368a0864fb1d60015fd5e.mockapi.io/new`;
  const pastMemberApi =
    "https://63ecd449be929df00cb3017e.mockapi.io/pastmembers";

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

  // const getCurrMembers = () => {
  //   setIsLoading(true);
  //   axios.get(currMemberApi).then((response) => {
  //     setCurrMemberData(response);
  //     console.log(response,'tashaf mahmood')
  //     setItems(response);
  //     setFilteredItems(response);
  //     setIsLoading(false);
  //   });
  // };

  //-------------CURRENT MEMBER DATA----------------------
  const [data, setData] = useState([]);
  const [pastData, setPastData] = useState([]);
  const [pastHasMore, setPastHasMore] = useState(true);
  const [pastPage, setPastPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const getCurrMembers = (p) => {
    const accessToken = localStorage.getItem("accessToken");
    const userCode = localStorage.getItem("usercode");

    const start = p ? p : page;

    axios
      .post(
        // `https://dev.elred.io/portalViewCompanyCurrentTeamMembers?start=${page}&offset=10`,
        API.VIEW_CURRENT_TEAM_MEMBERS + `start=${start}&offset=10`,
        { companyUserCode: userCode },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((res) => {
        if (start === 1) {
          setData([...res.result]);
        } else {
          setData((prevItems) => [...prevItems, ...res.result]);
        }

        setPage((prevPage) => start + 10);
      });
    // .then((res) => console.log(res.result,'save'));
    // console.log(res,'00000000000')
  };
  const handleLoadMore = () => {
    getCurrMembers();
  };

  //----------------------END CURRENT MEMBER API-----------------

  //------------------ PAST MEMBER API ----------------------
  const getPastMembers = (p) => {
    const accessToken = localStorage.getItem("accessToken");
    const userCode = localStorage.getItem("usercode");
    const start = p ? p : pastPage;

    axios
      .post(
        // `https://dev.elred.io/portalViewCompanyCurrentTeamMembers?start=${page}&offset=10`,
        API.VIEW_PAST_TEAM_MEMBERS + `start=${start}&offset=10`,
        { companyUserCode: userCode },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((res) => {
        if (start === 1) {
          setPastData([...res.result]);
       }else{
          setPastData((prevItems) => [...prevItems, ...res.result]);
        }
        setPastPage((prevPage) => start + 10);
      });
    // .then((res) => console.log(res.result,'save'));
    // console.log(res,'00000000000')
  };
  const pastHandleLoadMore = () => {
    getPastMembers();
  };

  //--------------------END PAST MEMBER API -----------------

  // const getPastMembers = () => {
  //   axios.get(pastMemberApi).then((response) => {
  //     setPastMemberData(response);
  //     setItems2(response);
  //     setFilteredItems2(response);
  //   });
  // };

  // const getCurrMembers = () => {
  //   const userCode = localStorage.getItem("usercode");
  //   const accessToken = localStorage.getItem("accessToken");

  //   axios
  //     .post(
  //       API.VIEW_CURRENT_TEAM_MEMBERS,
  //       { companyUserCode: userCode },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${accessToken}`,
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       setCurrMemberData(res.data.result);
  //       setItems(res.data);
  //       setFilteredItems(res.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching current team members:", error);
  //     });
  // };

  useEffect(() => {
    if (location.pathname == currentMember) {
      getCurrMembers();
    } else {
      getPastMembers();
    }
    setSelectedIds([]);
    // getCurrMembers();
    // getPastMembers();
    // current();
  }, [location]);

  return (
    <>
      <div className="upper-content">
        {console.log(data, "000000000")}
        <Description
          icon={users}
          title="Team Members"
          count={0}
          api={
            location.pathname == currentMember ? currMemberApi : pastMemberApi
          }
          getDataFunc={
            location.pathname == currentMember ? getCurrMembers : getPastMembers
          }
          getCurrMembers={getCurrMembers}
          addMember="addMember"
        />
        {/* {console.log(currentData, "current dAta")} */}
        <div className="desktop-search tablet-search">
          <div className="members-tab">
            <UnderLineTabs tabs={teamMembersTab} />
          </div>
          {/* <hr style={{ marginTop: "-2%" }} /> */}
          <RestoreDeleteBtn
            selectedIds={selectedIds}
            pastMemberData={pastMemberData}
            pastMemberApi={pastMemberApi}
            currMemberApi={currMemberApi}
            getCurrMembers={getCurrMembers}
            getPastMembers={getPastMembers}
            setSelectedIds={setSelectedIds}
            // currMemberData={currMemberData}
            currMemberData={data}
            handleSearch={handleSearch}
            handleSearch2={handleSearch2}
          />
        </div>
        <hr style={{ marginTop: "-2%" }} className="onlyDesktop" />

        {/* <div>tashaf mahmoo</div> */}

        <div>
          {location.pathname == currentMember && (
            // <InfiniteScroll
            //   dataLength={data.length}
            //   next={handleLoadMore}
            //   hasMore={hasMore}
            //   loader={<h4>Loading...</h4>}
            // >
            <CurrentMembers
              selectedIds={selectedIds}
              setSelectedIds={setSelectedIds}
              currMemberData={data}
              // currMemberData={currMemberData}
              currMemberApi={currMemberApi}
              pastMemberApi={pastMemberApi}
              getCurrMembers={getCurrMembers}
              getPastMembers={getPastMembers}
              filteredItems={filteredItems}
              dataLength={data.length}
              next={handleLoadMore}
              hasMore={hasMore}
            />
            // </InfiniteScroll>
          )}
          {location.pathname == pastMember && (
            // <InfiniteScroll
            //   dataLength={pastData.length}
            //   next={pastHandleLoadMore}
            //   hasMore={pastHasMore}
            //   loader={<h4>Loading...</h4>}
            // >
            <PastMembers
              selectedIds={selectedIds}
              setSelectedIds={setSelectedIds}
              pastMemberData={pastData}
              // pastMemberData={pastMemberData}
              pastMemberApi={pastMemberApi}
              currMemberApi={currMemberApi}
              getPastMembers={getPastMembers}
              getCurrMembers={getCurrMembers}
              filteredItems2={filteredItems2}
              dataLength={pastData.length}
              next={pastHandleLoadMore}
              hasMore={pastHasMore}
            />
            // </InfiniteScroll>
          )}
        </div>
      </div>
    </>
  );
};

export default TeamMembers;
