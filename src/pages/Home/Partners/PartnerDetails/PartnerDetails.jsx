/*eslint-disable */
import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import PartnerTabs from "./components/PartnerTabs/PartnerTabs";
import UpperPart from "./components/UpperPart/UpperPart";
import "./PartnerDetails.scss";

const PartnerDetails = () => {
  const location = useLocation()
  const state = location.state.data;
  const [selectedTab, setSelectedTab] = useState();
  

  return (
    <>
      <div className="partner-content">
        <UpperPart data={state} />
        <PartnerTabs selectedTab={selectedTab} state={state}/>
        <div className="outlet-div">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default PartnerDetails;
