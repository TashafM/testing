import React from "react";
import { Row } from "react-bootstrap";
import OrderDetailsBox from "../OrderDetailsBox/OrderDetailsBox";
import truck from "../../../../../assets/images/truck.svg";
import bill from "../../../../../assets/images/bill.svg";
import OrderSummaryBox from "../OrderSummayBox/OrderSummaryBox";
import FilterBtn from "../../../../../components/FilterButton/FilterButton";
import SearchBar from "../../../../../components/SearchBar/SearchBar";
import "./OrderDetails.scss";
import OrderTable from "../OrderTable/OrderTable";
import { useLocation } from "react-router-dom";
import { usePaginatedCompanyData } from "../../../../../hooks/pagination/usePaginatedData";
import { useState, useEffect } from "react";
import { orderDetailColumn } from "../../../../About/data/data";
import { getDesireDateFormate } from "../../../../../components/Utils/Utils";
import InfiniteScroll from "react-infinite-scroll-component";

const OrderDetails = () => {
  const location = useLocation();
  const orderId = location.state.data;
  const [page, setPage] = useState(0);

  const { data, loading, setData, getData } = usePaginatedCompanyData();

  useEffect(() => {
    getCurrentOrders();
  }, []);

  const getCurrentOrders = () => {
    const count = page * 10 + 1;

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
          if (res.result.length) {
            if (res.result[0].order.length) {
              const order = [
                {
                  ...data[0],
                  order: [...data[0].order, ...res.result[0].order],
                },
              ];
              console.log({ order });
              setData([...order]);
            }
          }
        }
        setPage(page + 1);
        console.log({ res });
      },
      body
    );
  };

  const order = data && data.length ? data[0] : {};

  return (
    <div className="upper-content order-detail-upper-content">
      <Row>
        <div className="order-details-div">
          <div className="order-company">
            <div className="order-date">
              Order Received on{" "}
              <span>
                {order?.orderDate ? getDesireDateFormate(order.orderDate) : ""}
              </span>
            </div>
            <div className="company-name">{order?.labelInstruction}</div>
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
        <InfiniteScroll
          dataLength={data?.length ? data[0]?.order ?? [] : 0}
          next={getCurrentOrders}
          hasMore={true}
          scrollableTarget="company-order-table-container"
        >
          <OrderTable
            data={data?.length ? data[0]?.order ?? [] : []}
            columns={orderDetailColumn}
          />
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default OrderDetails;
