import React from "react";
import "./orderlisttable.scss";
import { Table } from "react-bootstrap";
import ItemRow from "../ItemRow/ItemRow";

const OrderListTable = ({ disableDelete, data }) => {
  console.log(data, "from orderlisttable");
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
        {data.map((item, id) => (
          <ItemRow disableDelete={disableDelete} data={item}/>
        ))}
        {/* <ItemRow
          disableDelete={disableDelete}
          pName={"Konica Chrome Konica Chrome"}
          desc={"Magenta | 1 L. | RNB"}
        /> */}
      </tbody>
    </Table>
  );
};

export default OrderListTable;
