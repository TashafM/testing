import React from "react";
import "./Tabs.scss";

const Tabs = ({ gotoFunction }) => {
  return (
    <div className="col tabs-change">
      <div className="tab1" onClick={() => gotoFunction(1)}>
        Current Team Members
        {/* <div className={`${selectedTab == 1 ? "indicator" : ""}`}></div> */}
      </div>
      <div className="tab2" onClick={() => gotoFunction(2)}>
        Past Team Members
        {/* <div className={`${selectedTab == 2 ? "indicator" : ""}`}></div> */}
      </div>
    </div>
  );
};

export default Tabs;
