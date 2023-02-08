import React, { useState } from "react";
import "./Menus.scss";
import logo from '../../assets/images/atinks-dashboard.png'
import menuItems from "./menu.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import NeedHelp from "../NeedHelp/NeedHelp";
import { useNavigate } from "react-router-dom";

const Menus = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(1);

  const goto = (url) => {
    setData(url.id);
    navigate(`${url.path}`);
  };

  return (
    <div className="menus-col">
      <div className="menu-img">
        <img src={logo} alt="" />
      </div>

      <div className="menu-list">
        <ul>
          {menuItems.map((item) => {
            return (
              <>
                <div
                  className={`li ${data == item.id ? "active" : ""}`}
                  onClick={() => goto(item)}
                >
                  <FontAwesomeIcon icon={item.icon} className="icn" />
                  <span className="menu-name">{item.title}</span>
                </div>
              </>
            );
          })}
        </ul>
      </div>
      <div>
        {/* <NeedHelp /> */}
      </div>
    </div>
  );
};

export default Menus;
