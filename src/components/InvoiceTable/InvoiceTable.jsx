/*eslint-disable */
import React, { useEffect, useRef, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import pdf from "../../assets/images/pdf.svg";
import "./InvoiceTable.scss";

const InvoiceTable = ({ columns, datum }) => {
  //   const data = datum.sort((a, b) => b.id - a.id);  -----------> for sorting we can use this
  const navigate = useNavigate();

  return (
    <div className="invoice-table">
      <div className="table-container">
        <Table hover>
          <thead className="table-head">
            <tr className="tr-head">
              {/* {columns.map((col, idx) => (
                <th key={idx}>{col.title}</th>
              ))} */}
              <td className="orders">Orders</td>
              <td>Date</td>
              <td>Payment</td>
              <td>Status</td>
              <td>Amount</td>
              <td>Invoice</td>
            </tr>
          </thead>
          <tbody className="scroll-body">
            {datum.map((row, id) => (
              <tr className="tr-body">
                <td className="orders">{row.orders}</td>
                <td>{row.date}</td>
                <td>{row.payment}</td>
                <td>{row.status}</td>
                <td>{row.amount}</td>
                <td className="invoice-td-div">
                  <img src={pdf} />
                  <span className="invoice-td">{row.invoice}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default InvoiceTable;
