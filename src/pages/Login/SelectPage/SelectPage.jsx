import React, { createContext, useContext, useEffect, useState } from "react";
import "./selectpage.scss";
import { pages } from "./data";
import { IoIosArrowForward } from "react-icons/io";
import logo from "../../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import axios from "../../../helper/axios.js";
import { API } from "../../../helper/API";
import { TestData } from "../../../App";

const SelectPage = () => {
  const [dealerData, setDealerData] = useState([]);
  // const {testData, setTestData} = useContext(TestData)

  const fetchDetails = () => {
    const ACCESS_TOKEN = localStorage.getItem("accessToken");
    axios
      .post(
        API.VIEW_COMPANY_DEALERS,
        {},
        {
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
        }
      )
      // .then((res) => console.log(res.result, "from dealers api"));
      .then((res) => {
        setDealerData(res.result);
        // setTestData(res.result[0])
        localStorage.setItem("firstname", res.result[0].firstname);
        localStorage.setItem("dpURL", res.result[0].dpURL);
        // sessionStorage.setItem("taxPercentage", res[0].result.taxPercentage);
        // sessionStorage.setItem("taxPercentage", parseInt(res.result[0].taxPercentage));
        localStorage.setItem(
          "taxPercentage",
          Number(res.result[0].taxPercentage)
        );
      });
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  const navigate = useNavigate();
  return (
    <>
      <div className="logo-select-page">
        <img src={logo} alt="lgo" />
      </div>
      <div className="absolute-div-selectpage">
        <div className="selectpage-center">
          <div className="account-div">
            Choose an account type you want to see
          </div>
          <div className="account-types">
            {pages.map((item, id) => (
              <div
                className="individual-account"
                onClick={() => navigate(item.path)}
              >
                <div className="items-div">
                  <div className="logo-div">
                    <img src={item.icon} alt="" />
                  </div>
                  <div className="account-title">{item.title}</div>
                </div>
                <div className="view-btn">
                  <div className="name">View</div> <IoIosArrowForward />
                </div>
              </div>
            ))}
          </div>
          <div className="footer-text">
            If you want to switch between these two options you can switch in
            the dropdown in profile
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectPage;
