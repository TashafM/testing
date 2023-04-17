import React from "react";
import ScrollBtn from "../../../../../../components/ScrollBtn/ScrollBtn";
import { Table } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import arrow from "../../../../../../assets/images/greater-then.png";

import { useNavigate } from "react-router-dom";
import "./tables.scss";

function DealersTable({ showIcon, row, column }) {
  const navigate = useNavigate();
  return (
    <div className="dealers-main-container">
      <InfiniteScroll
        dataLength={20}
        //   next={next}
        //   hasMore={hasMore}
        scrollableTarget="subTable"
        // loader={
        //   <div style={{ textAlign: "center" }}>
        //     <BeatLoader color="#e72d38" size={15} />
        //   </div>
        // }
      >
        <div className="dealers-scroll-container" id="subTable">
          <Table hover>
            <thead className={"dealer-table-head"}>
              <tr className="dealer-table-head ">
                {column?.map((col, idx) => (
                  <th key={idx}>{col.title}</th>
                ))}
              </tr>
            </thead>

            <tbody className="scroll-body">
              {row?.map((row, id) => (
                <tr
                  key={`current-order-${id}`}
                  className="table-body-container"
                  onClick={() => navigate("/dealers/orders/detail")}
                >
                  <td>{id + 1}</td>
                  {column?.map((col, id) => {
                    if (id && id < column?.length - 1) {
                      return <td key={id}>{row[col.value]}</td>;
                    }
                  })}
                  <td>
                    <div className="d-flex align-items-center">
                      <p className="table-status-chip m-0">
                        <span className="status-circel " /> In Transit
                      </p>
                      <img
                        src={arrow}
                        alt="arrow right-action"
                        className="arrow-right-image"
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default DealersTable;
