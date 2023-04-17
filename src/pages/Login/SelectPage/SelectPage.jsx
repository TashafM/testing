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
      .then((res) => {
        setDealerData(res.result);
        console.log(res.result,'rsult')
        localStorage.setItem(
          "principalCompanyUserCode",
          localStorage.getItem("principalCompanyUserCode") ??
            res.result[0].principalCompanyUserCode
        );

        localStorage.setItem(
          "firstname",
          localStorage.getItem("firstname") ?? res.result[0].firstname
        );
        localStorage.setItem(
          "dpURL",
          localStorage.getItem("dpURL") ?? res.result[0].dpURL
        );
        localStorage.setItem(
          "cgstPercentage",
          localStorage.getItem("cgstPercentage") ??
            Number(res.result[0].cgstPercentage)
        );
        localStorage.setItem(
          "sgstPercentage",
          localStorage.getItem("sgstPercentage") ??
            Number(res.result[0].sgstPercentage)
        );
        localStorage.setItem(
          "igstPercentage",
          localStorage.getItem("igstPercentage") ??
            Number(res.result[0].igstPercentage)
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
