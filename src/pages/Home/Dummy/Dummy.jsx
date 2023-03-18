import React, { useEffect, useState } from "react";
import { API } from "../../../helper/API";
import axios from "../../../helper/axios";
import { dummyData } from "./dummydata";

const Dummy = () => {
  const [myData, setMyData] = useState([]);
  const fetchData = () => {
    const accessToken = localStorage.getItem("accessToken");
    const userCode = localStorage.getItem("usercode");
    axios
      .post(
        API.VIEW_CURRENT_TEAM_MEMBERS,
        { companyUserCode: userCode },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((res) => setMyData(res.data.result));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      
    </div>
  );
};

export default Dummy;
