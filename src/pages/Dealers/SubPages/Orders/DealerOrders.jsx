import React from "react";
import { Outlet } from "react-router-dom";
import UnderLineTabs from "../../../../components/Tabs/UnderLineTabs";
import { useLocation } from "react-router-dom";
import "./dealerorders.scss";
import { dealerOrderTabs } from "../../../../constant/tabsData";
import { useState } from "react";
import OrderTopBar from "./component/OrderTopBar";

const DealerOrders = () => {
  const location = useLocation();

  const [orderDetail, setOrderDetail] = useState({});

  return (
    <div className="allproducts dealers-order-wrapper-container">
      <OrderTopBar title={"Orders"} orderDetail={orderDetail} />
      {location.pathname !== "/dealers/orders/detail" ? (
        <div className="dealers-order-main-container">
          <UnderLineTabs tabs={dealerOrderTabs} />
        </div>
      ) : null}
      <Outlet context={[orderDetail, setOrderDetail]} />
    </div>
  );
};

export default DealerOrders;
