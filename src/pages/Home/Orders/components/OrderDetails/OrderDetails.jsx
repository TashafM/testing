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
import {
  usePaginatedCompanyData,
  usePaginatedData,
} from "../../../../../hooks/pagination/usePaginatedData";
import { useState } from "react";
import { useEffect } from "react";
import { orderDetailColumn } from "../../../../About/data/data";

//  https://dev.elred.io/dealerViewOrderDetails?start=1&offset=10
//  https://dev.elred.io/dealerViewOrderDetails?start=1&offset=10
const OrderDetails = () => {
  const location = useLocation();
  const orderId = location.state.data;
  const [page, setPage] = useState(0);

  const { data, loading, setData, getData } = usePaginatedCompanyData();

  useEffect(() => {
    getCurrentOrders();
  }, []);

  const getCurrentOrders = () => {
    const count = page + 1;

    console.log({ orderId });
    const body = {
      orderId: orderId?.orderId,
      partnerUserCode: orderId?.partnerUserCode,
    };
    const url = `/portalViewOrderDetails?start=${count}&offset=10`;
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

  const order = data && data.length ? data[0] : {};

  console.log({ order });

  return (
    <div className="upper-content">
      <Row>
        <div className="order-details-div">
          <div className="order-company">
            <div className="order-date">
              Order Received on <span>{order.orderDate}</span>
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
        <OrderDetailsBox icon={bill} icon2={truck} order={order} />
        <OrderSummaryBox order={order} />
      </Row>
      <div className="table-div-order-details">
        <OrderTable
          data={data?.length ? data[0]?.order ?? [] : []}
          columns={orderDetailColumn}
        />
      </div>
    </div>
  );
};

export default OrderDetails;
