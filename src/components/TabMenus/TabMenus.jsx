import React from "react";
import "./TabMenus.scss";
import menuItems from "../Menus/menu";
import { useNavigate } from "react-router";

const TabMenus = () => {
  const navigate = useNavigate();
  const openPage = (link) => {
    navigate(link);
  };
  return (
    <div className="tabMenus">
      {menuItems.map((item) => (
        <div className="tabs" onClick={() => openPage(item.path)}>
          {item.title}
        </div>
      ))}
    </div>
  );
};

export default TabMenus;
