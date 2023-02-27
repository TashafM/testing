/*eslint-disable */
import React, { useEffect, useRef, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import pdf from "../../assets/images/pdf.svg";
import atink from "../../../../../assets/images/atink.png";
// import "./InvoiceTable.scss";
import { orderTableData } from "../data/data";
import './OrderTable.scss'

const OrderTable = ({ columns, datum }) => {
  //   const data = datum.sort((a, b) => b.id - a.id);  -----------> for sorting we can use this
  const navigate = useNavigate();

  const dummy = (a) => console.log(a);

  return (
    <div className="orderTable">
      <div className="table-container">
        <Table hover>
          <thead className="table-head">
            <tr className="tr-head">
              {/* {columns.map((col, idx) => (
                <th key={idx}>{col.title}</th>
              ))} */}
              <td>#</td>
              <td>Catalog</td>
              <td>Free Text</td>
              <td>Item Description</td>
              <td>Qty in litres</td>
              <td>Open Inv. Qty</td>
              <td>Unit Price per litre</td>
              <td>Tax Code</td>
              <td>Tax Amount (LC)</td>
            </tr>
          </thead>
          <tbody className="scroll-body">
            {orderTableData.map((row, id) => (
              <tr className="tr-body">
                <td>{row.id}</td>
                <td>{row.catalog}</td>
                <td>
                  <img src={atink} />
                  <span className="orderTable-name">{row.name}</span>
                </td>
                <td>{row.description}</td>
                <td>{row.litres}</td>
                <td>{row.qty}</td>
                <td>{row.price}</td>
                <td>{row.tax_code}</td>
                <td>{row.total_amt}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default OrderTable;
