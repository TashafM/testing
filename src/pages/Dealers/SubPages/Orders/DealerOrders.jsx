import React from "react";
import { Outlet } from "react-router-dom";
import TopBar from "../../Components/TopBar/TopBar";
import UnderLineTabs from "../../../../components/Tabs/UnderLineTabs";
import { dealerOrderTabs } from "../../../About/data/data";
import { useLocation } from "react-router-dom";
import "./dealerOrders.scss";

const DealerOrders = () => {
  const location = useLocation();
  return (
    <div className="allproducts">
      <TopBar title={"Orders"} />
      {location.pathname !== "/dealers/orders/detail" ? (
        <div className="dealers-order-main-container">
          <UnderLineTabs tabs={dealerOrderTabs} />
        </div>
      ) : null}
      <Outlet />
    </div>
  );
};

export default DealerOrders;
