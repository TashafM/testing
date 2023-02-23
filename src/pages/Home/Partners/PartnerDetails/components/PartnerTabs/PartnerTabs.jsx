import React from "react";
import { useLocation } from "react-router-dom";

const PartnerTabs = ({select, selectedTab}) => {
    const location = useLocation();
    console.log(location,'lo')
  return (
    <div className="partner-tabs-div">
      <div className="partner-tab" onClick={() => select(1)}>
        About{" "}
        <div className={location.pathname == "/home/partners/detail/about" ? "partner-indicator" : ""}></div>
      </div>
      <div className="partner-tab" onClick={() => select(2)}>
        Address Details{" "}
        <div className={location.pathname == "/home/partners/detail/address" ? "partner-indicator" : ""}></div>
      </div>
      <div className="partner-tab" onClick={() => select(3)}>
        Payment Details{" "}
        <div className={location.pathname == "/home/partners/detail/payment-details" ? "partner-indicator" : ""}></div>
      </div>
      <div className="partner-tab" onClick={() => select(4)}>
        Catalog{" "}
        <div className={location.pathname == "/home/partners/detail/catalog" ? "partner-indicator" : ""}></div>
      </div>
      <div className="partner-tab" onClick={() => select(5)}>
        Past Order{" "}
        <div className={location.pathname == "/home/partners/detail/past-orders" ? "partner-indicator" : ""}></div>
      </div>
    </div>
  );
};

export default PartnerTabs;
