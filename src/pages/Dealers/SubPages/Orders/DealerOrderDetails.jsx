import React from "react";
import { orderDetailColumn } from "../../../About/data/data";
import billing from "../../../../assets/images/billing.png";
import shipping from "../../../../assets/images/shipping.png";
import ViewAddress from "./component/drawer/ViewAddress";
import { useState } from "react";
import ViewOtherInfo from "./component/drawer/ViewOtherInfo";
import { useEffect } from "react";
import { usePaginatedData } from "../../../../hooks/pagination/usePaginatedData";
import { useLocation, useOutletContext } from "react-router-dom";
import OrderTable from "../../../Home/Orders/components/OrderTable/OrderTable";
import { CircularProgress } from "@mui/material";
import { prepareAddressString } from "../../../../components/Utils/Utils";
import InfiniteScroll from "react-infinite-scroll-component";
import BtnTitleCenter from "../../../../components/Button/BtnTitleCenter";
import arrow from "../../../../assets/images/arrow-right-red.png";

function DealerOrderDetails() {
  const [showAddress, setShowAddress] = useState(false);
  const [showOther, setShowOther] = useState(false);
  const location = useLocation();
  const orderId = location.state.data;
  const [orderDetail, setOrderDetail] = useOutletContext();

  const [page, setPage] = useState(0);

  const { data, loading, setData, getData } = usePaginatedData();

  useEffect(() => {
    getCurrentOrders();

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
        <div className="row address-card-main">
          <div className="col-6 ">
            <div
              className="d-flex address-card-container "
              onClick={() => {
                // setShowAddress(true);
              }}
            >
              <div className=" flex-grow-1 detail-top-card width-50 ">
                <div className="address-head d-flex">
                  <img
                    src={billing}
                    className="icon-address-head"
                    alt="billing address"
                  />
                  <p className="m-0">Billing Address :</p>
                </div>
                <div className="address-field">
                  <p className="m-0 over-flow-text ">
                    {prepareAddressString(order?.billingAddress ?? {})}
                  </p>
                  <p className="m-0">
                    {order?.billingAddress?.contactNumber ?? ""}
                  </p>
                </div>
              </div>
              <div className=" flex-grow-1  detail-top-card width-50 ">
                <div className=" flex-grow-1 ">
                  <div className="address-head d-flex">
                    <img
                      src={shipping}
                      className="icon-address-head"
                      alt="billing address"
                    />
                    <p className="m-0">Shipping Address :</p>
                  </div>
                  <div className="address-field">
                    <p className="m-0 over-flow-text">
                      {prepareAddressString(order?.shippingAddress ?? {})}
                    </p>
                    {/* <p className="m-0">
                      {order.shippingAddress?.contactNumber}
                    </p> */}
                    <div className="mobile d-flex address-contact-card justify-content-between align-items-center">
                      <p className="m-0">
                        {order?.shippingAddress?.contactNumber ?? ""}
                      </p>
                      <div className="d-flex align-items-center ">
                        <BtnTitleCenter
                          title="View all"
                          onClick={() => {
                            setShowAddress(true);
                          }}
                        />
                        <img
                          className="imge-icon-red"
                          src={arrow}
                          alt="arrow-right"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 ">
            <div
              className="d-flex address-card-container "
              onClick={() => {
                // setShowOther(true);
              }}
            >
              <div className=" flex-grow-1 detail-top-card width-50 ">
                <div className=" flex-grow-1 ">
                  <div className="address-head d-flex">
                    <p className="order-summary-text">Other information :</p>
                  </div>
                  <div className="address-field address-contact-card">
                    <p className="m-0 d-flex justify-content-between align-items-center over-flow-text over-flow-text-other">
                      {order.otherInstruction}
                      <BtnTitleCenter
                        title={"See all"}
                        onClick={() => {
                          setShowOther(true);
                        }}
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div className=" flex-grow-1  detail-top-card width-50 ">
                <div className="address-head d-flex ">
                  <p className="order-summary-text">Order summary:</p>
                </div>
                <div className="address-field">
                  <div className="d-flex justify-content-between">
                    <p className="m-0">Items total</p>
                    <p className="m-0">
                      {order?.currency?.symbol} {order?.itemsTotal ?? "0.0"}
                    </p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="m-0">Taxes</p>
                    <p className="m-0">
                      {order?.currency?.symbol} {order?.taxAmount ?? "0.0"}
                    </p>
                  </div>
                  <div className="d-flex justify-content-between total-container-div">
                    <p className="m-0">Total Price</p>
                    <p className="m-0">
                      {order?.currency?.symbol} {order?.totalAmount}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
      <InfiniteScroll
        dataLength={data?.length ? data[0]?.order ?? [] : 0}
        next={getCurrentOrders}
        hasMore={true}
        scrollableTarget="company-order-table-container"
      >
        <OrderTable
          columns={orderDetailColumn}
          data={data?.length ? data[0]?.order ?? [] : []}
        />
      </InfiniteScroll>
    </div>
  );
}

export default DealerOrderDetails;
