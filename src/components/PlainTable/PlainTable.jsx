/*eslint-disable */
import React from "react";
import { Table } from "react-bootstrap";
import "./PlainTable.scss";

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
                    return (
                      <>
                        <td key={id}>
                          <div className={col.value}>{value}</div>
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
