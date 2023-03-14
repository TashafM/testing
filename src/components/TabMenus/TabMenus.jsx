import React from "react";
import "./TabMenus.scss";
import menuItems from "../Menus/menu";
import { useLocation, useNavigate } from "react-router";

const TabMenus = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const openPage = (link) => {
    navigate(link);
  };
  return (
    <div className="tabMenus">
      {menuItems.map((item) => (
        <div
          className={item.path === location.pathname || location.pathname.includes(item.path)? "active-tab" : "tabs"}
          onClick={() => openPage(item.path)}
        >
          {item.title}
        </div>
      ))}
    </div>
  );
};

export default TabMenus;
