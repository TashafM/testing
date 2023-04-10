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
        <ItemRow
          disableDelete={disableDelete}
          pName={"Konica Chrome Konica Chrome"}
          desc={"Magenta | 1 L. | RNB"}
        />
        <ItemRow
          disableDelete={disableDelete}
          pName={"Konica Chrome Konica Chrome"}
          desc={"Magenta | 1 L. | RNB"}
        />
        <ItemRow
          disableDelete={disableDelete}
          pName={"Konica Chrome Konica Chrome Konica Chrome Konica Chrome "}
          desc={"Lemon Yellow | 5 L. | AK-RCT Bottle"}
        />
      </tbody>
    </Table>
  );
};

export default OrderListTable;
