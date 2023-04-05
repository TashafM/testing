/*eslint-disable */
import React, { useEffect, useState } from "react";
import "./Menus.scss";
import logo from "../../assets/images/atinks-dashboard.png";
// import NeedHelp from "../NeedHelp/NeedHelp";

import { useLocation, useNavigate } from "react-router-dom";

const Menus = ({tabs}) => {
  const navigate = useNavigate();
  const location = useLocation()
  // const [data, setData] = useState(localStorage.getItem("data") || null);

  const goto = (url) => {
    // setData(url.id);
    navigate(`${url.path}`);
  };

  // useEffect(() => {
  //   localStorage.setItem("data", data);
  // }, [data]);

  return (
    <div className="menus-col">
      <div className="menu-img dealer-flow">
        <img src={logo} alt="" />
      </div>

      <div style={{overflow:'auto'}}>
        <div className="menu-list">
          <ul>
            {tabs.map((item, id) => {
              return (
                <>
                  <div
                    key={id}
                    className={`li ${location.pathname.slice(0,10) === item.path.slice(0,10) ? "active" : ""}`}
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
