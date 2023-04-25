/*eslint-disable */
import React from "react";
import { Table } from "react-bootstrap";
import defaultProduct from "../../../../../assets/images/default-product-image.png";
import "./OrderTable.scss";

const OrderTable = ({ columns, data, row }) => {
  //   const data = datum.sort((a, b) => b.id - a.id);  -----------> for sorting we can use this

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
              <tr key={`orders-tabel-row-${id}`} className="tr-body">
                <td>{id + 1}</td>

                {columns.map((col, id) => {
                  let value = row;
                  col.value.split(",").map((item) => {
                    value = value[item];
                  });
                  if (col.title === "Item Description") {
                    return (
                      <td className="detail-div-img">
                        <img src={row?.productImages?.[0] ?? defaultProduct} />
                        <span className="orderTable-name">{value}</span>
                      </td>
                    );
                  }
                  if (id) {
                    return <td>{value}</td>;
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
