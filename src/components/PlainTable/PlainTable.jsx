/*eslint-disable */
import React, { useEffect, useRef, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./PlainTable.scss";

const PlainTable = ({ columns, datum }) => {
  //   const data = datum.sort((a, b) => b.id - a.id);  -----------> for sorting we can use this
  const navigate = useNavigate();

  const orderDetails = (item) => {
    // navigate(`/home/order/details`, { state: { data: val } });
    navigate(`/home/order/details`, { state: { data: item } });
  };

  const dummy = (a) => console.log(a);

  return (
    <div className="plainTable">
      <div className="table-container">
        <Table hover>
          <thead className="table-head">
            <tr className="tr-head">
              {columns.map((col, idx) => (
                <th key={idx}>{col.title}</th>
              ))}
            </tr>
          </thead>
          <tbody className="scroll-body">
            {datum.map((row, id) => (
              <>
                <tr
                  key={row.id}
                  className="tr-body"
                  onClick={() => orderDetails(row)}
                >
                  {columns.map((col, id) => (
                    <>
                      <td key={id}>
                        <div className={col.value}>
                          {row[col.value]}
                        </div>
                      </td>
                    </>
                  ))}
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
