import React from "react";
import "./orderlisttable.scss";
import { Table } from "react-bootstrap";
import ItemRow from "../ItemRow/ItemRow";

const OrderListTable = ({ disableDelete, data, setData }) => {
  const del = (val) => {
    const filtered = data.filter((item) => item.productId !== val);
    setData(filtered);
  };

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
            <ItemRow
              disableDelete={disableDelete}
              data={item}
              removeItem={del}
            />
          ))}
      </tbody>
    </Table>
  );
};

export default OrderListTable;
