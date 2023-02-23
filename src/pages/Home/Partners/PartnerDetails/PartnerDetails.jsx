/*eslint-disable */
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import UpperPart from "./components/UpperPart/UpperPart";
import "./PartnerDetails.scss";

const PartnerDetails = () => {
  const state = useLocation();
  const [data, setData] = useState(state.state.data);
  const [selectedTab, setSelectedTab] = useState(1);
  const select = (tab) => {
    setSelectedTab(tab);
  };

  useEffect(() => {});

  return (
    <>
      <div className="partner-content">
        <UpperPart data={data} />
        <div className="partner-tabs-div">
          <div className="partner-tab" onClick={() => select(1)}>
            About{" "}
            <div className={selectedTab == 1 ? "partner-indicator" : ""}></div>
          </div>
          <div className="partner-tab" onClick={() => select(2)}>
            Address Details{" "}
            <div className={selectedTab == 2 ? "partner-indicator" : ""}></div>
          </div>
          <div className="partner-tab" onClick={() => select(3)}>
            Payment Details{" "}
            <div className={selectedTab == 3 ? "partner-indicator" : ""}></div>
          </div>
          <div className="partner-tab" onClick={() => select(4)}>
            Catalog{" "}
            <div className={selectedTab == 4 ? "partner-indicator" : ""}></div>
          </div>
          <div className="partner-tab" onClick={() => select(5)}>
            Past Order{" "}
            <div className={selectedTab == 5 ? "partner-indicator" : ""}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnerDetails;
