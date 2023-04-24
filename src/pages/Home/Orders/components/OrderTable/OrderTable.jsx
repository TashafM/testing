/*eslint-disable */
import React, { useEffect, useRef, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import pdf from "../../assets/images/pdf.svg";
import atink from "../../../../../assets/images/atink.png";
// import "./InvoiceTable.scss";
import { orderTableData } from "../data/data";
import "./OrderTable.scss";

const OrderTable = ({ columns, data, row }) => {
  //   const data = datum.sort((a, b) => b.id - a.id);  -----------> for sorting we can use this
  const navigate = useNavigate();

  const dummy = (a) => console.log(a);

  console.log({ columns }, { data });

  return (
    <div className="orderTable">
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
            {data.map((row, id) => (
              <tr className="tr-body">
                <td>{id + 1}</td>

                {columns.map((col, id) => {
                  console.log(row[col.value], row);
                  if (id) {
                    console.log(col.value);
                    return <td>{row[col.value]}</td>;
                  }
                })}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default OrderTable;
