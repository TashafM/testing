import React from "react";
import "./Tabs.scss";

const Tabs = ({ setTab, selectedTab }) => {
  return (
    <div className="col tabs-change">
      <div className="tab1" onClick={() => setTab(1)}>
        Current Partners
        <div className={`${selectedTab == 1 ? "indicator" : ""}`}></div>
      </div>
      <div className="tab2" onClick={() => setTab(2)}>
        Past Partners
        <div className={`${selectedTab == 2 ? "indicator" : ""}`}></div>
      </div>
    </div>
  );
};

export default Tabs;
