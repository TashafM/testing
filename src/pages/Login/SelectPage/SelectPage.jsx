import React from "react";
import LoginNav from "../../../components/LoginNav/LoginNav";
import "./selectpage.scss";
import { pages } from "./data";
import { IoIosArrowForward } from "react-icons/io";
import logo from "../../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";

const SelectPage = () => {

const navigate = useNavigate()
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
              <div className="individual-account" onClick={()=>navigate(item.path)}>
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
