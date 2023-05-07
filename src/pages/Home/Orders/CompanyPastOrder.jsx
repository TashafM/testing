import React from "react";
import PlainTable from "../../../components/PlainTable/PlainTable";
import { useState } from "react";
import { usePaginatedCompanyData } from "../../../hooks/pagination/usePaginatedData";
import { useEffect } from "react";
import { companyCurrentOrder } from "../../../constant/tablesTitle";
import { CircularProgress } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import "./order.scss";

function CompanyPastOrder() {
  const [page, setPage] = useState(0);
  const navigate = useNavigate();
  const { data, loading, setData, error, getData } = usePaginatedCompanyData();

  const getCurrentOrders = () => {
    const count = page * 10 + 1;
    const url = `/portalViewPastOrders?start=${count}&offset=10`;
    getData(url, count, (res) => {
      if (count === 1) {
        setData(res.result);
      } else {
        setData([...data, ...res.result]);
      }

      setPage(count + 1);
      console.log({ res });
    });
  };

  useEffect(() => {
    getCurrentOrders();
  }, []);

  if (loading) {
    return (
      <div className="default-height">
        <CircularProgress size={24} />
      </div>
    );
  }

  const onDetailClicked = (item) => {
    navigate(`/home/order/details`, { state: { data: item } });
  };
  return (
    <div className="company-current-order-container">
      <InfiniteScroll
        dataLength={data.length}
        next={getCurrentOrders}
        hasMore={true}
        scrollableTarget="order-table-container"
      >
        <PlainTable
          columns={companyCurrentOrder}
          data={data}
          onClick={onDetailClicked}
          type={"company"}
        />
      </InfiniteScroll>
    </div>
  );
}

export default CompanyPastOrder;
