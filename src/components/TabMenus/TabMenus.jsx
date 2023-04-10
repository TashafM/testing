import React from "react";
import "./TabMenus.scss";
// import menuItems from "../Menus/menu";
import { useLocation, useNavigate } from "react-router";

const TabMenus = ({tabs}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const openPage = (link) => {
    navigate(link);
  };
  return (
    <div className="tabMenus">
      {tabs.map((item,id) => (
        <>
          <div
            className={
              item.path.slice(0,10) === location.pathname.slice(0,10)
                ? "active-tab"
                : "tabs"
            }
            onClick={() => openPage(item.path)}
            key={id}
          >
            {item.title}
          </div>
        </>
      ))}
    </div>
  );
};

export default TabMenus;
