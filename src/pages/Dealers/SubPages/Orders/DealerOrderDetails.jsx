import React from "react";
import { orderDetailColumn } from "../../../About/data/data";
import ViewAddress from "./component/drawer/ViewAddress";
import { useState } from "react";
import ViewOtherInfo from "./component/drawer/ViewOtherInfo";
import { useEffect } from "react";
import { usePaginatedData } from "../../../../hooks/pagination/usePaginatedData";
import { useLocation, useOutletContext } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import OrderSummary from "./component/OrderSummary";
import { useRef } from "react";
import PlainTable from "../../../../components/PlainTable/PlainTable";
import "./dealerorders.scss";

function DealerOrderDetails() {
  const [showAddress, setShowAddress] = useState(false);
  const [showOther, setShowOther] = useState(false);
  const location = useLocation();
  const orderId = location?.state?.data;
  const [orderDetail, setOrderDetail] = useOutletContext();
  const myRef = useRef(null);
  const [scrollX, setScrollX] = useState(0);
  const [page, setPage] = useState(0);

  const { data, loading, setData, getData } = usePaginatedData();

  useEffect(() => {
    if (orderId) {
      getCurrentOrders();
    }

    return () => {
      setOrderDetail({});
    };
  }, []);

  const getCurrentOrders = () => {
    const count = page * 10 + 1;
    const body = {
      orderId: orderId.orderId,
    };
    const url = `/dealerViewOrderDetails?start=${count}&offset=10`;
    getData(
      url,
      count,
      (res) => {
        setOrderDetail(res.result);
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
              setData([...order]);
            }
          }
        }
        setPage(page + 1);
      },
      body
    );
  };

  if (loading) {
    return (
      <div className="default-height">
        <CircularProgress size={24} />
      </div>
    );
  }

  console.log(data);

  const order = data && data?.length ? data[0] : {};

  return (
    <div className="dealers-order-main-container">
      <div className="container-fluid m-0 p-0 ">
        <OrderSummary
          order={order}
          onClick={() => {
            setShowAddress(true);
          }}
          onClickOther={() => {
            setShowOther(true);
          }}
        />
      </div>
      {showAddress && (
        <ViewAddress
          show={showAddress}
          order={order}
          handleClose={() => {
            setShowAddress(false);
          }}
        />
      )}
      {showOther && (
        <ViewOtherInfo
          show={showOther}
          order={order}
          handleClose={() => {
            setShowOther(false);
          }}
        />
      )}

      <div className="table-dealers-order-details">
        <InfiniteScroll
          dataLength={data?.length ? data[0]?.order ?? [] : 0}
          next={getCurrentOrders}
          hasMore={true}
          scrollableTarget="company-order-table-container"
        >
          <PlainTable
            columns={orderDetailColumn}
            data={data?.length ? data[0]?.order ?? [] : []}
          />
          {/* <ScrollBtn myRef={myRef} setScrollX={setScrollX} scrollX={scrollX} /> */}
        </InfiniteScroll>
      </div>
    </div>
  );
}

export default DealerOrderDetails;
