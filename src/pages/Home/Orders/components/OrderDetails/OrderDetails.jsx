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
import { usePaginatedData } from "../../../../../hooks/pagination/usePaginatedData";
import { useState } from "react";
import { useEffect } from "react";

//  https://dev.elred.io/dealerViewOrderDetails?start=1&offset=10
//  https://dev.elred.io/dealerViewOrderDetails?start=1&offset=10
const OrderDetails = () => {
  const location = useLocation();
  const orderId = location.state.data;
  const [page, setPage] = useState(0);

  const { data, loading, setData, getData } = usePaginatedData();

  useEffect(() => {
    getCurrentOrders();
  }, []);

  const getCurrentOrders = () => {
    const count = page + 1;
    const body = {
      orderId: orderId.orderId,
    };
    const url = `dealerViewOrderDetails?start=${count}&offset=10`;
    getData(
      url,
      count,
      (res) => {
        if (count === 1) {
          setData(res.result);
        } else {
          setData([...data, ...res.result]);
        }
        setPage(count);
        console.log({ res });
      },
      body
    );
  };

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
      </Row>
      <div className="table-div-order-details">
        <OrderTable data={data} columns={[]} />
      </div>
    </div>
  );
};

export default OrderDetails;
