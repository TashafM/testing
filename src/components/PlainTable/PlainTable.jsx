/*eslint-disable */
import React from "react";
import { Table } from "react-bootstrap";
import "./PlainTable.scss";
import arrow from "../../assets/images/greater-then.png";
import { getDesireDateFormate } from "../Utils/Utils";

const PlainTable = ({ columns, data, onClick, type = "dealers" }) => {
  //   const data = datum.sort((a, b) => b.id - a.id);  -----------> for sorting we can use this

  return (
    <div className="plainTable" id="order-table-container">
      <div className="table-container">
        <Table hover>
          <thead className="table-head">
            <tr className="tr-head">
              {columns.map((col, idx) => (
                <th key={idx}>{col.value}</th>
              ))}
            </tr>
          </thead>
          <tbody className="scroll-body">
            {data.map((row, index) => (
              <>
                <tr
                  key={row.id}
                  className="tr-body"
                  onClick={() => onClick(row)}
                >
                  {columns.map((col, id) => {
                    if (!id) {
                      return (
                        <td>
                          <div>{index + 1}</div>
                        </td>
                      );
                    }

                    let value = row;
                    col.title.split(",").map((item, index) => {
                      value = value[item];
                    });

                    if (col.title.includes("Date")) {
                      value = getDesireDateFormate(value ?? "");
                    }
                    if (col.value.includes("Status")) {
                      return (
                        <td>
                          <div className="d-flex align-items-center justify-content-center">
                            <p className="table-status-chip m-0">
                              <span className="status-circel " /> {value}
                            </p>
                            <img
                              src={arrow}
                              alt="arrow right-action"
                              className="arrow-right-image"
                            />
                          </div>
                        </td>
                      );
                    }

                    return (
                      <>
                        <td key={id}>
                          <div className="table-over-flow-text">
                            {col?.value?.includes("Total")
                              ? `${row?.currency?.symbol}`
                              : ""}
                            {value}
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
