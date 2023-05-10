/*eslint-disable */
import React, { useEffect, useState } from "react";
import "./Menus.scss";
import logo from "../../assets/images/atinks-dashboard.png";
import compIcon from "../../assets/images/company-default-icon.png";

// import NeedHelp from "../NeedHelp/NeedHelp";

import { useLocation, useNavigate } from "react-router-dom";
import { getLocalStorageData } from "../Utils/Utils";

const Menus = ({ tabs, marginTop }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const userData = getLocalStorageData("userData");
  // const [data, setData] = useState(localStorage.getItem("data") || null);

  const goto = (url) => {
    // setData(url.id);
    navigate(`${url.path}`);
  };

  // useEffect(() => {
  //   localStorage.setItem("data", data);
  // }, [data]);

  console.log({ userData });

  return (
    <div className="menus-col">
      <div className="menu-img dealer-flow d-flex align-items-center">
        <img src={userData?.dpURL ? userData.dpURL : compIcon} alt="" />
        <div className="title-cont">
          <p className="comp-title mb-0">
            {userData?.firstname} {userData?.lastname} {console.log(userData)}
          </p>
          {/* <p className="comp-subtitle  mb-0">{userData?.userName}</p> */}
        </div>
      </div>

      <div style={{ overflow: "auto" }}>
        <div className={marginTop ? "menu-list marginTop40" : "menu-list"}>
          <ul>
            {tabs.map((item, id) => {
              return (
                <>
                  <div
                    key={id}
                    className={`li ${
                      location.pathname.slice(0, 10) === item.path.slice(0, 10)
                        ? "active"
                        : ""
                    }`}
                    onClick={() => goto(item)}
                  >
                    <span className="icn">
                      <i className={`icon-${item.icon}`}></i>
                    </span>
                    <span className="menu-name">{item.title}</span>
                  </div>
                </>
              );
            })}
          </ul>
        </div>
      </div>
      <div>{/* <NeedHelp /> */}</div>
    </div>
  );
};

export default Menus;
