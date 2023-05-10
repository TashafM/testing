/*eslint-disable */
import React from "react";
import { Table } from "react-bootstrap";
import "./PlainTable.scss";
import arrow from "../../assets/images/greater-then.png";
import { getDesireDateFormate } from "../Utils/Utils";
import { useLocation } from "react-router-dom";
import defaultProduct from "../../assets/images/default-product-image.png";
import { CircularProgress } from "@mui/material";

const PlainTable = ({ columns, data, onClick }) => {
  const loaction = useLocation();
  //   const data = datum.sort((a, b) => b.id - a.id);  -----------> for sorting we can use this

  if (!data.length) {
    return (
      <div className="default-height loading-screen d-flex align-items-center justify-content-center">
        <div className="txt">No order placed yet...</div>
      </div>
    );
  }

  return (
    <div className="plainTable" id="order-table-container">
      <div className="table-container">
        <Table hover={loaction.pathname.includes("details") ? false : true}>
          <thead className="table-head">
            <tr className="tr-head">
              {columns.map((col, idx) => (
                <th className="table-head-overflow" key={idx}>
                  {col.value}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="scroll-body">
            {data.map((row, index) => (
              <>
                <tr
                  key={row.id}
                  className="tr-body"
                  style={{
                    cursor: !loaction.pathname.includes("details")
                      ? "pointer"
                      : "auto",
                  }}
                  onClick={() => {
                    if (!loaction?.pathname.includes("detail")) onClick(row);
                  }}
                >
                  {columns.map((col, id) => {
                    let value = row;
                    col.title.split(",").map((item, index) => {
                      value = value[item];
                    });

                    const isPrice =
                      col?.value?.includes("Total") ||
                      col?.value?.includes("Price") ||
                      col?.value?.includes("Amount");

                    const isPastOrder = location.pathname.includes(
                      "dealers/orders/past-order"
                    );

                    const isLastIndex = id === columns.length - 1;
                    if (col.title.includes("Date")) {
                      value = getDesireDateFormate(value ?? "");
                    }
                    if (!id) {
                      return (
                        <td>
                          <div>{index + 1}</div>
                        </td>
                      );
                    }

                    if (isLastIndex && !col.value) {
                      return (
                        <td id="arrow-div-table">
                          <img
                            src={arrow}
                            alt="arrow right-action"
                            className="arrow-right-image"
                          />
                        </td>
                      );
                    }

                    if (col.value === "Item Description") {
                      return (
                        <td className="detail-div-img">
                          <img
                            src={row?.productImages?.[0] ?? defaultProduct}
                          />
                          <span className="orderTable-name">{value}</span>
                        </td>
                      );
                    }
                    if (col.value.includes("Status")) {
                      return (
                        <td>
                          <div className="d-flex align-items-center justify-content-center  table-over-flow-text">
                            <p
                              style={{
                                backgroundColor: isPastOrder
                                  ? "#E1F4EB"
                                  : "#fdf2e7",
                                color: isPastOrder ? "#03A55A" : "#ee8d31",
                              }}
                              className="table-status-chip m-0"
                            >
                              <span
                                style={{
                                  backgroundColor: location.pathname.includes(
                                    "dealers/orders/past-order"
                                  )
                                    ? "#03A55A"
                                    : "#EE8D31",
                                }}
                                className="status-circel "
                              />
                              {value}
                            </p>
                          </div>
                        </td>
                      );
                    }
                    if (isPrice) {
                      return (
                        <td>
                          <div className="d-flex align-items-center justify-content-center col-price-overflow  table-over-flow-text">
                            <p className="m-0">
                              {col?.value?.includes("Price") ||
                              col?.value?.includes("Total") ||
                              col?.value?.includes("Amount")
                                ? `${row?.currency?.symbol} `
                                : ""}
                              {value}
                            </p>
                          </div>
                        </td>
                      );
                    }
                    return (
                      <>
                        <td key={id}>
                          <div className="table-over-flow-text">
                            {value}{" "}
                            {col?.value?.includes("Rate") && value ? " %" : ""}
                          </div>
                        </td>
                      </>
                    );
                  })}
                </tr>
              </>
            ))}
          </tbody>
        </Table>
      </div>
      {/* <ScrollBtn myRef={myRef} setScrollX={setScrollX} /> */}
    </div>
  );
};

export default PlainTable;
