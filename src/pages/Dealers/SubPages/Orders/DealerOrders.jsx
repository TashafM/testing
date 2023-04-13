import React from "react";
import { Outlet } from "react-router-dom";
import TopBar from "../../Components/TopBar/TopBar";
import UnderLineTabs from "../../../../components/Tabs/UnderLineTabs";
import { dealerOrderTabs } from "../../../About/data/data";
import "./dealerOrders.scss";

const DealerOrders = () => {
  return (
    <div className="allproducts">
      <TopBar title={"Orders"} />
      <div className="dealers-order-main-container">
        <UnderLineTabs tabs={dealerOrderTabs} />
      </div>
      <Outlet />
    </div>
  );
};

export default DealerOrders;
