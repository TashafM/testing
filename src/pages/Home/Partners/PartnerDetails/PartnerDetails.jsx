/*eslint-disable */
import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import PartnerTabs from "./components/PartnerTabs/PartnerTabs";
import UpperPart from "./components/UpperPart/UpperPart";
import "./PartnerDetails.scss";

const PartnerDetails = () => {
  const state = useLocation().state.data;
  console.log(useLocation());
  const [selectedTab, setSelectedTab] = useState();
  const navigate = useNavigate();
  const select = (tab) => {
    setSelectedTab(tab);
    if (tab == 1) {
      navigate(`/home/partners/detail/about`, { state: { data: state } });
    }
    if (tab == 2) {
      navigate(`/home/partners/detail/address`, { state: { data: state } });
    }
    if (tab == 3) {
      navigate(`/home/partners/detail/payment-details`, {
        state: { data: state },
      });
    }
    if (tab == 4) {
      navigate(`/home/partners/detail/catalog`, { state: { data: state } });
    }
    if (tab == 5) {
      navigate(`/home/partners/detail/past-orders`, { state: { data: state } });
    }
  };

  useEffect(() => {});

  return (
    <>
      <div className="partner-content">
        <UpperPart data={state} />
        <PartnerTabs select={select} selectedTab={selectedTab} />
        <div className="outlet-div">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default PartnerDetails;
