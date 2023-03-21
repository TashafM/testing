import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { API } from "../../../helper/API";
import axios from "../../../helper/axios";
import { dummyData } from "./dummydata";
import DummyTable from "./DummyTable";

const Dummy = () => {
  const [myData, setMyData] = useState([]);

  //-------------------------------------
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  //------------------------------------
  const fetchData = () => {
    const accessToken = localStorage.getItem("accessToken");
    const userCode = localStorage.getItem("usercode");
    axios
      .post(
        `https://dev.elred.io/portalViewCompanyCurrentTeamMembers?start=${page}&offset=10`,
        { companyUserCode: userCode },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((res) => {
        setItems((prevItems) => [...prevItems, ...res.result]);
        setPage((prevPage) => prevPage + 10);
      });
    // .then((res) => console.log(res.result,'save'));
    // console.log(res,'00000000000')
  };

  const handleLoadMore = () => {
    fetchData();
  };

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

  const tashaf = () => {
    toast.success("Message sent successfully!");
  };

  useEffect(() => {
    fetchData();
  }, []);

  const columns = [
    { key: "displayFirstName", title: "First Name" },
    { key: "displayEmail", title: "Email" },
    { key: "displayLocation.city", title: "City" },
    { key: "displayLocation.state", title: "State" },
    { key: "displayLocation.country", title: "Country" },
    { key: "department", title: "Department" },
  ];

  return (
    <div>
      <div>
        <ToastContainer position="top-center" />
      </div>
      <h1>Tashaf Mahmood</h1>
      <Button onClick={tashaf}>Hllo</Button>

      <InfiniteScroll
        dataLength={items.length}
        next={handleLoadMore}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        <DummyTable data={items} columns={columns} />
      </InfiniteScroll>
    </div>
  );
};

export default Dummy;
