import React from "react";
import "./orderlisttable.scss";
import { Table } from "react-bootstrap";
import ItemRow from "../ItemRow/ItemRow";

const OrderListTable = () => {
  return (
    <Table>
      <thead className="header">
        <tr>
          <th>Products</th>
          <th>Quantity</th>
          <th>Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody className="right-side-body">
        <ItemRow />
        <ItemRow />
        <ItemRow />
        <ItemRow />
        <ItemRow />
      </tbody>
    </Table>
  );
};

export default OrderListTable;
