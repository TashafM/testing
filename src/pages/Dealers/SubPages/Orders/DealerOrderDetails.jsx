import React from "react";
import { orderDetailColumn } from "../../../About/data/data";
import DealersTable from "./component/tables/DealersTable";
import CardHead from "../../../About/Information/Component/CardHead";
import billing from "../../../../assets/images/billing.png";
import shipping from "../../../../assets/images/shipping.png";
import ViewAddress from "./component/drawer/ViewAddress";
import { useState } from "react";
import ViewOtherInfo from "./component/drawer/ViewOtherInfo";
import { useEffect } from "react";
import { usePaginatedData } from "../../../../hooks/pagination/usePaginatedData";
import { useLocation } from "react-router-dom";
import OrderTable from "../../../Home/Orders/components/OrderTable/OrderTable";
import { CircularProgress } from "@mui/material";
import { prepareAddressString } from "../../../../components/Utils/Utils";

function DealerOrderDetails() {
  const [showAddress, setShowAddress] = useState(false);
  const [showOther, setShowOther] = useState(false);
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
    const url = `/dealerViewOrderDetails?start=${count}&offset=10`;
    getData(
      url,
      count,
      (res) => {
        if (count === 1) {
          setData(res.result);
        } else {
          setData([...data, ...res.result]);
        }
        // setPage(count);
        console.log({ res });
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

  return (
    <div className="dealers-order-main-container">
      <div className="container-fluid m-0 p-0 ">
        <div className="row address-card-main">
          <div className="col-6 ">
            <div
              className="d-flex address-card-container "
              onClick={() => {
                setShowAddress(true);
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
                    {data?.length
                      ? prepareAddressString(data[0]?.billingAddress ?? {})
                      : ""}
                  </p>
                  <p className="m-0">
                    {data.length ? data[0].billingAddress?.contactNumber : ""}
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
                      {data?.length
                        ? prepareAddressString(data[0]?.shippingAddress ?? {})
                        : ""}
                    </p>
                    <p className="m-0">
                      {data?.length
                        ? data[0]?.shippingAddress?.contactNumber
                        : ""}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 ">
            <div
              className="d-flex address-card-container "
              onClick={() => {
                setShowOther(true);
              }}
            >
              <div className=" flex-grow-1 detail-top-card width-50 ">
                <div className=" flex-grow-1 ">
                  <div className="address-head d-flex">
                    <p className="order-summary-text">Other information :</p>
                  </div>
                  <div className="address-field">
                    <p className="m-0 over-flow-text over-flow-text-other">
                      Lorem ipsum dolor sit amet, consectetur adipis cing elit,
                      sed do eiusmod tempor, Lorem ipsum dolor sit amet,
                      consectetur adipis cing elit, sed do eiusmod tempor
                      consectetur adipis...See all
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
                    <p className="m-0">INR 1440.0</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="m-0">Taxes</p>
                    <p className="m-0">INR 194.00</p>
                  </div>
                  <div className="d-flex justify-content-between total-container-div">
                    <p className="m-0">Total Price</p>
                    <p className="m-0">INR 1630.00</p>
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
          handleClose={() => {
            setShowAddress(false);
          }}
        />
      )}
      {showOther && (
        <ViewOtherInfo
          show={showOther}
          handleClose={() => {
            setShowOther(false);
          }}
        />
      )}

      <OrderTable
        columns={orderDetailColumn}
        data={data?.length ? data[0]?.order ?? [] : []}
      />
    </div>
  );
}

export default DealerOrderDetails;
