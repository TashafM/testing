import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { delalersCurrentOrderColumn } from "../../../About/data/data";
import { CircularProgress } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import { usePaginatedData } from "../../../../hooks/pagination/usePaginatedData";
import PlainTable from "../../../../components/PlainTable/PlainTable";

function DealerCurrentOrder() {
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  const { data, loading, setData, getData } = usePaginatedData();

  const getCurrentOrders = () => {
    const count = page * 10 + 1;
    const url = `/dealerViewCurrentOrders?start=${count}&offset=10`;
    getData(url, count, (res) => {
      if (count === 1) {
        setData(res.result);
      } else {
        setData([...data, ...res.result]);
      }
      setPage(page + 1);
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
    navigate(`/dealers/orders/detail`, { state: { data: item } });
  };

  console.log({ data });
  return (
    <div className="dealers-past-order-wrapper">
      <InfiniteScroll
        dataLength={data.length}
        next={getCurrentOrders}
        hasMore={true}
        scrollableTarget="order-table-container"
      >
        <PlainTable
          columns={delalersCurrentOrderColumn}
          data={data}
          onClick={onDetailClicked}
        />
      </InfiniteScroll>
    </div>
  );
}

export default DealerCurrentOrder;
