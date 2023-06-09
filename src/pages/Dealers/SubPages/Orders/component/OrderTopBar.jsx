import React from "react";
import "../../../Components/TopBar/topbar.scss";
import SearchBarDealers from "../../../../../components/SearchBarDealers/SearchBarDealers";
import backpage from "../../../../../assets/images/backpage.svg";
import { useNavigate } from "react-router-dom";
import Filter from "../../../Components/Filter/Filter";
import "../dealerorders.scss";
import { getDesireDateFormate } from "../../../../../components/Utils/Utils";
import Arrow from "../../../../../assets/images/arrow-right.png";
import { toast } from "react-toastify";

const OrderTopBar = ({ title, goback, orderDetail }) => {
  const navigate = useNavigate();

  console.log({ orderDetail });
  const handleBack = () => {
    navigate(-1);
  };

  const order = orderDetail && orderDetail.length ? orderDetail[0] : {};
  return (
    <div className="top-comp">
      <div className="title-container">
        <span>
          {goback ? (
            <img
              src={backpage}
              onClick={handleBack}
              className="back-btn"
              alt="order"
            />
          ) : (
            ""
          )}
        </span>
        {Object.keys(order).length ? (
          <>
            <div className="d-flex align-items-center">
              <span className="order-status-title-text">
                <img
                  src={Arrow}
                  alt="arrow-back"
                  className="icon-back-order"
                  onClick={() => {
                    navigate(-1);
                  }}
                />
                Ordered on{" "}
              </span>
              <span className="order-status-title-text text-span-date">
                {order?.orderDate ? getDesireDateFormate(order.orderDate) : ""}
              </span>
              <div className="d-flex align-items-center justify-content-end">
                <p className="table-status-chip m-0">
                  <span className="status-circel " /> {order?.orderStatus}
                </p>
              </div>
            </div>
          </>
        ) : (
          <span className="title">{title}</span>
        )}
      </div>
      <div className="search-filter-btn">
        <SearchBarDealers />
        <Filter
          className="p-0"
          onClick={() => {
            toast.success("Feature Coming Soon");
          }}
        />
      </div>
    </div>
  );
};

export default OrderTopBar;
