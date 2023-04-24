import React from "react";
import { Outlet } from "react-router-dom";
import TopBar from "../../Components/TopBar/TopBar";
import UnderLineTabs from "../../../../components/Tabs/UnderLineTabs";
import { useLocation } from "react-router-dom";
import "./dealerorders.scss";
import { dealerOrderTabs } from "../../../../constant/tabsData";

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
