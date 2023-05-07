import React from "react";
import { Row } from "react-bootstrap";
import FilterBtn from "../../../../../components/FilterButton/FilterButton";
import SearchBar from "../../../../../components/SearchBar/SearchBar";
import "./OrderDetails.scss";
import OrderTable from "../OrderTable/OrderTable";
import { useLocation, useNavigate } from "react-router-dom";
import { usePaginatedCompanyData } from "../../../../../hooks/pagination/usePaginatedData";
import { useState, useEffect } from "react";
import { orderDetailColumn } from "../../../../About/data/data";
import { getDesireDateFormate } from "../../../../../components/Utils/Utils";
import InfiniteScroll from "react-infinite-scroll-component";
import ViewAddress from "../../../../Dealers/SubPages/Orders/component/drawer/ViewAddress";
import ViewOtherInfo from "../../../../Dealers/SubPages/Orders/component/drawer/ViewOtherInfo";
import OrderSummary from "../../../../Dealers/SubPages/Orders/component/OrderSummary";
import Arrow from "../../../../../assets/images/arrow-right.png";
import { toast } from "react-toastify";
import PlainTable from "../../../../../components/PlainTable/PlainTable";

const OrderDetails = () => {
  const location = useLocation();
  const orderId = location?.state?.data;
  const [page, setPage] = useState(0);
  const [showAddress, setShowAddress] = useState(false);
  const [showOther, setShowOther] = useState(false);

  const { data, loading, setData, getData } = usePaginatedCompanyData();

  useEffect(() => {
    if (data) {
      getCurrentOrders();
    }
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

  const navigation = useNavigate();

  const order = data && data.length ? data[0] : {};

  return (
    <div className="upper-content order-detail-upper-content">
      <Row>
        <div className="order-details-div">
          <div className="order-company">
            <div className="order-date d-flex align-items-center">
              <img
                src={Arrow}
                alt="arrow-back"
                className="icon-back-order"
                onClick={() => {
                  navigation(-1);
                }}
              />
              <spa>Order Received on </spa>
              <span>
                {order?.orderDate
                  ? ` ${getDesireDateFormate(order.orderDate)}`
                  : ""}
              </span>
            </div>
            <div className="company-name">{}</div>
          </div>
          <div className="search-filter-div">
            <SearchBar />
            <div>
              <FilterBtn
                onClick={() => {
                  toast.success("Feature Coming Soon");
                }}
              />
            </div>
          </div>
        </div>
        <OrderSummary
          order={order}
          onClick={() => setShowAddress(true)}
          onClickOther={() => {
            setShowOther(true);
          }}
        />
      </Row>
      {showAddress && (
        <ViewAddress
          show={showAddress}
          order={order}
          handleClose={() => {
            setShowAddress(false);
          }}
        />
      )}

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
      <div className="table-div-order-details">
        <InfiniteScroll
          dataLength={data?.length ? data[0]?.order ?? [] : 0}
          next={getCurrentOrders}
          hasMore={true}
          scrollableTarget="company-order-table-container"
        >
          <PlainTable
            data={data?.length ? data[0]?.order ?? [] : []}
            columns={orderDetailColumn}
          />
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default OrderDetails;
