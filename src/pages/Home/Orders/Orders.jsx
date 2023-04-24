import React from "react";
import orders from "../../../assets/images/orders.svg";
import Description from "../Description/Description";
import { CompanyOrderTabs } from "../../../constant/tabsData";
import UnderLineTabs from "../../../components/Tabs/UnderLineTabs";
import { Outlet } from "react-router-dom";

const Orders = () => {
  // const [data, setData] = useState([])
  // const [isLoading, setIsLoading] = useState(false)

  return (
    <div className="upper-content orders-upper-content">
      <Description icon={orders} title="Orders" count={70} noButtons />
      <UnderLineTabs tabs={CompanyOrderTabs} />
      <Outlet />
    </div>
  );
};

export default Orders;
