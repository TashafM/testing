import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { partnerTabs } from "../data";

const PartnerTabs = ({ select, selectedTab }) => {
  const location = useLocation();
  const navigate = useNavigate()
  console.log(location, "lo");

  const callBack = (link, id) => {
    navigate(link);
    select(id)
  }
  return (
    // <div className="partner-tabs-div">
    //   <div className="partner-tab" onClick={() => select(1)}>
    //     About{" "}
    //     <div className={location.pathname == "/home/partners/detail/about" ? "partner-indicator" : ""}></div>
    //   </div>
    //   <div className="partner-tab" onClick={() => select(2)}>
    //     Address Details{" "}
    //     <div className={location.pathname == "/home/partners/detail/address" ? "partner-indicator" : ""}></div>
    //   </div>
    //   <div className="partner-tab" onClick={() => select(3)}>
    //     Payment Details{" "}
    //     <div className={location.pathname == "/home/partners/detail/payment-details" ? "partner-indicator" : ""}></div>
    //   </div>
    //   <div className="partner-tab" onClick={() => select(4)}>
    //     Catalog{" "}
    //     <div className={location.pathname == "/home/partners/detail/catalog" ? "partner-indicator" : ""}></div>
    //   </div>
    //   <div className="partner-tab" onClick={() => select(5)}>
    //     Past Order{" "}
    //     <div className={location.pathname == "/home/partners/detail/past-orders" ? "partner-indicator" : ""}></div>
    //   </div>
    // </div>

    <div className="col tabs-change mb-45">
      {partnerTabs.map((item, index) => {
        return (
          <div className="tab-cont " key={item.link}>
            <div
              className={
                location.pathname === item.link ? "tab" : "tab title-indicator"
              }
              onClick={() => callBack(item.link,item.index)}
            >
              {item.title}
            </div>
            <div
              className={location.pathname === item.link ? "tab-indicator" : ""}
            ></div>
          </div>
        );
      })}
    </div>
    // <div onClick={()=>select}>
    //   <UnderLineTabs tabs={partnerTabs} />
    // </div>
  );
};

export default PartnerTabs;
