import React from "react";
import { Row } from "react-bootstrap";
import OrderDetailsBox from "../OrderDetailsBox/OrderDetailsBox";
import truck from "../../../../../assets/images/truck.svg";
import bill from "../../../../../assets/images/bill.svg";
import OrderSummaryBox from "../OrderSummayBox/OrderSummaryBox";
import FilterBtn from "../../../../../components/FilterButton/FilterButton";
import SearchBar from "../../../../../components/SearchBar/SearchBar";
import "./OrderDetails.scss";
import PlainTable from "../../../../../components/PlainTable/PlainTable";
import { orderTableColumn, orderTableData } from "../data/data";
import OrderTable from "../OrderTable/OrderTable";
import { useLocation } from "react-router-dom";

const OrderDetails = () => {
  const location = useLocation();
  const data = location.state.data;
  return (
    <div className="upper-content">
      <Row>
        <div className="order-details-div">
          <div className="order-company">
            <div className="order-date">
              Order Received on <span>{data.date}</span>
            </div>
            <div className="company-name">{data.name}</div>
          </div>
          <div className="search-filter-div">
            <SearchBar />
            <div>
              <FilterBtn />
            </div>
          </div>
        </div>
        <OrderDetailsBox icon={bill} icon2={truck} />
        <OrderSummaryBox />
        {/* <OrderDetailsBox /> */}
      </Row>
      <div className="table-div-order-details">
        {/* <PlainTable columns={orderTableColumn} datum={orderTableData} /> */}
        <OrderTable />
      </div>
    </div>
  );
};

export default OrderDetails;
