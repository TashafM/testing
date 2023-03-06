import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { partnerTabs } from "../data";

const PartnerTabs = ({ select, selectedTab, state }) => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location, "lo");

  return (
    <div className="col tabs-change mb-45">
      {partnerTabs.map((item, index) => {
        return (
          <div className="tab-cont " key={item.link}>
            <div
              className={
                location.pathname === item.link ? "tab" : "tab title-indicator"
              }
              onClick={() =>
                navigate(item.link, { state: { data: state } })
              }
            >
              {item.title}
            </div>
            <div
              className={location.pathname === item.link ? "tab-indicator" : ""}
            ></div>
          </div>
        );
      })}
    </div>
   
  );
};

export default PartnerTabs;
