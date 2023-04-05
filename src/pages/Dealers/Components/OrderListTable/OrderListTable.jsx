import React from "react";
import "./orderlisttable.scss";
import { Table } from "react-bootstrap";
import ItemRow from "../ItemRow/ItemRow";

const OrderListTable = ({ disableDelete }) => {
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
        <ItemRow disableDelete={disableDelete} />
        <ItemRow disableDelete={disableDelete} />
        <ItemRow disableDelete={disableDelete} />
        <ItemRow disableDelete={disableDelete} />
        <ItemRow disableDelete={disableDelete} />
      </tbody>
    </Table>
  );
};

export default OrderListTable;
